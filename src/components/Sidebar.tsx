import styles from './Sidebar.module.css'
import matrix from '../assets/matrix.png'
import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img src={matrix} alt='Imagem de fundo' className={styles.cover} />

      <div className={styles.profile}>
        <Avatar 
          hasBorder
          src='https://avatars.githubusercontent.com/u/69869482?v=4' />
        <strong>Elaine Delgado</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}