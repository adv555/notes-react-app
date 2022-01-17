import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from 'redux/notes/notes.actions'
import s from './NoteEditor.module.scss'

export default function NoteEditor({ onSave }) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const handleChange = e => {
    // setMessage(e.target.value)
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

  const handleSubmit = e => {
    e.preventDefault()

    if (message === '') {
      return alert('Fill in the note.')
    }

    dispatch(actions.addNote({ name, category, message }))
    onSave()
    reset()
  }

  const reset = () => {
    setName('')
    setCategory('')
    setMessage('')
  }

  return (
    <form className={s.noteEditor} onSubmit={handleSubmit}>
      <input
        className={s.editorInput}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        // id={nameInputId}
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
