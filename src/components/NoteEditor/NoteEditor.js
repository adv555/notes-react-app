import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from 'redux/notes/notes.actions'
import s from './NoteEditor.module.scss'

export default function NoteEditor({ onSave }) {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const handlChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (message === '') {
      return alert('Fill in the note.')
    }

    dispatch(actions.addNote(message))
    onSave()
    setMessage('')
  }

  return (
    <form className={s.noteEditor} onSubmit={handleSubmit}>
      <textarea
        className={s.nodoEditorTextarea}
        value={message}
        placeholder="your note here.."
        onChange={handlChange}
      ></textarea>
      <button className={s.noteEditorBtn} type="submit">
        Save note
      </button>
    </form>
  )
}
