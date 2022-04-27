import React from 'react'
import s from './Navigation.module.scss'

const Navigation: React.FC = () => {
  return (
    <nav>
      <h1 className={s.box}>
        NoteB
        <span className={s.span}>
          <span className={s.eye}>o</span>
          <span className={s.eye}>o</span>
        </span>
        k
      </h1>
    </nav>
  )
}
export default Navigation
