import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: Boolean,
  src: string,
  alt?: string,
}

export const Avatar = ({ hasBorder=true, ...props}: AvatarProps) => {
  return (
    <img
      {...props}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}