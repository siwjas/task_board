import { Navigation } from '../Navigation'
import styles from './styles.module.scss'

export function Header() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Meu board', href: '/board' }
  ]
  return(
    <header className={styles.headerContainer}>
      <Navigation navLinks={navLinks}/>
    </header>
  )
}