import React from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './AppBar.module.scss'

const AppBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
}
export default AppBar
