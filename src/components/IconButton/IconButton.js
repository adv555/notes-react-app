import React from 'react'
import PropTypes from 'prop-types'
import styles from './IconButton.module.scss'

const IconButton = ({ children, onClick, ...allProps }) => (
  <button type="button" className={styles.iconButton} onClick={onClick} {...allProps}>
    {children}
  </button>
)

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
}

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
}

export default IconButton
