import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import actions from 'redux/notes/notes.actions'
import { getVisibleNotes, getNotes } from 'redux/notes/notes.selectors'
import Note from 'components/Note'
import s from './NoteList.module.scss'

const NotesList = () => {
  const notes = useSelector(getVisibleNotes)
  const dispatch = useDispatch()

  const onDeleteNote = id => dispatch(actions.deleteNote(id))
  const onToggleArchived = id => dispatch(actions.toggleArchived(id))

  return (
    <ul className={s.noteList}>
      {notes.map(({ id, content, completed }) => (
        <li key={id} className={s.noteListItem}>
          <Note
            text={content}
            completed={completed}
            onToggleArchived={() => onToggleArchived(id)}
            onDelete={() => onDeleteNote(id)}
          />
        </li>
      ))}
    </ul>
  )
}

export default NotesList

//  className={`s.NoteList__item ${completed ? 's.NoteList__item--completed' : ''}`}
