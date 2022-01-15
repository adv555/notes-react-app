import styles from './PageHeader.module.css'

export default function PageHeader({ title }) {
  return <h1 className={styles.title}>{title}</h1>
}
