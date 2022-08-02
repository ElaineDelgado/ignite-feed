import styles from './Header.module.css'
import logo from '../assets/logo.png'

export const  Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo Ignite" />
    </header>
  )
}