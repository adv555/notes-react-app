// import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav>
      <h1 className={styles.link}>LOGO</h1>
      {/* <NavLink
        className={styles.link}
        to="/"
        style={({ isActive }) => ({ color: isActive ? 'yellow' : 'grey' })}
      >
        Home
      </NavLink> */}
    </nav>
  )
}
