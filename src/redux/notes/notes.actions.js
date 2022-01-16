import shortid from 'shortid'
import { createAction } from '@reduxjs/toolkit'

const addNote = createAction('notes/add', content => ({
  payload: {
    id: shortid.generate(),
    content,
    completed: false,
  },
}))

const deleteNote = createAction('notes/delete')

const changeFilter = createAction('notes/changeFilter')

const toggleArchived = createAction('notes/toggleArchived')

const actions = { addNote, deleteNote, changeFilter, toggleArchived }
export default actions
