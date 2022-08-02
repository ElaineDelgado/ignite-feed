import { Header }from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from './App.module.css'

import './global.css'

const posts = [  
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/69869482?v=4',
      name: 'Elaine Delgado',
      role: 'Software Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala pessoal!🖖',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um conteúdo no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat, espero que gostem!😎',
      },
      {
        type: 'link',
        content: 'https://elainedelgado.netlify.app/Portifa',
      },
    ],
    publishedAt: new Date('2022-07-18 13:13:13'),
  },
  {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat',
  },
  content: [
    {
      type: 'paragraph',
      content: 'E aí galera!!!🖖',
    },
    {
      type: 'paragraph',
      content:
        'Acabei de subir um conteúdo no Ignite. É um projeto do NLW 4, evento da Rocketseat, espero que gostem!😎',
    },
    {
      type: 'link',
      content: 'https://elainedelgado.netlify.app/Portifa',
    },
  ],
  publishedAt: new Date('2022-07-29 13:13:13'),
  },
]

const App = () => {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />  
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
