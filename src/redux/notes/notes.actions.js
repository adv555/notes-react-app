import shortid from 'shortid'
import dayjs from 'dayjs'
import { createAction } from '@reduxjs/toolkit'

const addNote = createAction('notes/add', ({ name, category, message, dates }) => ({
  payload: {
    id: shortid.generate(),
    name,
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category,
    content: message,
    // dates,
    completed: false,
  },
}))

const deleteNote = createAction('notes/delete')

const changeFilter = createAction('notes/changeFilter')

const toggleArchived = createAction('notes/toggleArchived')

const actions = { addNote, deleteNote, changeFilter, toggleArchived }
export default actions
