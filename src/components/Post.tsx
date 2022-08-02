import React from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

interface Content {
  type: string,
  content: string
}

interface PostProps {
  author: Author,
  publishedAt: Date,
  content: Content[],
}

export const Post = ({ author, publishedAt, content }: PostProps) => {
  const [newCommentText, setNewCommentText] = React.useState('')
  const [comments, setComments] = React.useState(['Demais!!'])
  
    const handleCreateNewComment = (event: React.FormEvent) => {
      event.preventDefault()
  
      setComments([...comments, newCommentText])
      setNewCommentText('')
    }

  const handleNewCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value)
  }

  const handleNewInvalidComment = (event: React.InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    event.target.setCustomValidity('Você não escreveu o comentário!')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const publishedDateFormatted = format(
    publishedAt,
    "dd  'de'  LLL  'de'  yyyy  'às'  HH'h'mm",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <div>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toLocaleString('pt')}
          >
            Publicado {publishedDateRelativeToNow}
          </time>
        </div>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href='#'>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe seu comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewInvalidComment}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}

