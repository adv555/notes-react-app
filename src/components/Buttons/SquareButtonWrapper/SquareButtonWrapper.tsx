import React from 'react'
import styles from './SquareButtonWrapper.module.scss'
import { IconButtonProps } from '../types/iconButton'

const IconButton: React.FC<IconButtonProps> = ({ children, onClick, ...allProps }) => (
  <button type="button" className={styles.iconButton} onClick={onClick} {...allProps}>
    {children}
  </button>
)

export default IconButton
