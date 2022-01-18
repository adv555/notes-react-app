import s from './Navigation.module.scss'

export default function Navigation() {
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
