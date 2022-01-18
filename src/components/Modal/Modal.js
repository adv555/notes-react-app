// import { Component } from 'react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')
export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return createPortal(
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>{children}</div>
    </div>,
    modalRoot,
  )
}

// Modal as a Class Component

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose()
//     }
//   }

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose()
//     }
//   }

//   render() {
//     return createPortal(
//       <div className={styles.modalBackdrop} onClick={this.handleBackdropClick}>
//         <div className={styles.modalContent}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     )
//   }
// }
