// import { Component } from 'react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { MouseEventHandler, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const modalRoot: any = document.querySelector('#modal-root')

const Modal: React.FC<ModalProps> = ({ children, onClose }): ReactJSXElement => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleBackdropClick = (e: MouseEventHandler<HTMLDivElement> | any) => {
    if (e.currentTarget === e.target) {
      console.log(e.currentTarget, e.target)
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

export default Modal
