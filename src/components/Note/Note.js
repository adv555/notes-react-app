// import React from 'react'
import s from '../NoteList/NoteList.module.scss'

const Note = ({ text, completed, onToggleArchived, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className={s.NoteListCheckbox}
        checked={completed}
        onChange={onToggleArchived}
      />
      <p className={s.noteListText}>{text}</p>
      <button type="button" className={s.noteListBtn} onClick={onDelete}>
        Delete
      </button>
    </>
  )
}

export default Note
