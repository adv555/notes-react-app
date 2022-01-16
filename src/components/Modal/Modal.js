import { Component } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }
  handleKeyDown = e => {
    // console.log('Выход по Escape');
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  handleBackdropClick = e => {
    // console.log('Кликнули в бекдроп');
    console.log(e)
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot,
    )
  }
}
