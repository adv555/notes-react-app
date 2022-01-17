// import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import IconButton from 'components/Buttons/IconButtonWrapper'
import s from '../NoteList/NoteList.module.scss'

const Note = ({ name, date, category, text, completed, onToggleArchived, onDelete }) => {
  return (
    !completed && (
      <>
        <p className={s.noteListText}>{name}</p>
        <p className={s.noteListText}>{date}</p>
        <p className={s.noteListText}>{category}</p>
        <p className={s.noteListText}>{text}</p>
        {/* <button type="button" className={s.noteListBtn} onClick={onDelete}>
        Delete
      </button> */}
        <IconButton onClick={onDelete} type="button" aria-label="Delete note">
          <IconContext.Provider
            value={{ color: '#3f51b5', size: '1.5em ', className: 'global-class-name' }}
          >
            <AiFillDelete />
          </IconContext.Provider>
        </IconButton>
        <input
          type="checkbox"
          className={s.NoteListCheckbox}
          checked={completed}
          onChange={onToggleArchived}
        />
      </>
    )
  )
}

export default Note
