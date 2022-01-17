import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'

const addNote = createAction('notes/add', ({ name, category, message }) => ({
  payload: {
    id: shortid.generate(),
    name,
    date: Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    category,
    content: message,
    completed: false,
  },
}))

const deleteNote = createAction('notes/delete')

const changeFilter = createAction('notes/changeFilter')

const toggleArchived = createAction('notes/toggleArchived')

const actions = { addNote, deleteNote, changeFilter, toggleArchived }
export default actions
