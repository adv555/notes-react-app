import styles from './PageHeader.module.scss'

export default function PageHeader({ title }) {
  return <h1 className={styles.title}>{title}</h1>
}
