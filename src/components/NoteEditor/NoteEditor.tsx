import { useState } from 'react'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import actions from 'redux/notes/notes.actions'
import { getNoteById } from 'redux/notes/notes.selectors'
import s from './NoteEditor.module.scss'

interface Props {
  onSave: () => void
}

const NoteEditor: React.FC<Props> = ({ onSave }) => {
  const note = useAppSelector(getNoteById)
  const dispatch = useAppDispatch()

  const id = note.map((el: { id: any }) => el.id).toString()
  const prevNote = note.map((el: { name: any }) => el.name).toString()
  const prevMessage = note.map((el: { content: any }) => el.content).toString()

  const [name, setName] = useState(prevNote || '')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState(prevMessage || '')

  console.log(name, category, message)

  const handleChange = (e: { currentTarget: { name: string; value: string } }) => {
    const { name, value } = e.currentTarget
    switch (name) {
      case 'name':
        return setName(value)

      case 'category':
        return setCategory(value)

      case 'message':
        return setMessage(value)

      default:
        return
    }
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (message === '') {
      return alert('Fill in the note.')
    }
    !id
      ? dispatch(actions.addNote({ name, category, message }))
      : dispatch(actions.updateNote({ id, name, category, message }))
    reset()
    onSave()
  }

  const reset = () => {
    setName('')
    setCategory('')
    setMessage('')
    dispatch(actions.findNoteById(null))
  }

  return (
    <form className={s.noteEditor} onSubmit={handleSubmit}>
      <input
        className={s.editorInput}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The name can only consist of letters, apostrophe, dashes, and spaces."
        required
        value={name}
        onChange={handleChange}
      />
      <select
        className={s.editorInput}
        name="category"
        value={category}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          --Please choose a category--
        </option>
        <option value="task">Task</option>
        <option value="idea">Idea</option>
        <option value="randomThought">Random Thought</option>
      </select>
      <textarea
        className={s.nodoEditorTextarea}
        name="message"
        value={message}
        placeholder="your note here.."
        onChange={handleChange}
      ></textarea>
      <button className={s.noteEditorBtn} type="submit">
        Save note
      </button>
    </form>
  )
}

export default NoteEditor
