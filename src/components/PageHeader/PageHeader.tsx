import React from 'react'
import styles from './PageHeader.module.scss'

interface PageHeaderProps {
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>
}

export default PageHeader
