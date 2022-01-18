import shortid from 'shortid'
import dayjs from 'dayjs'
import { createAction } from '@reduxjs/toolkit'
import getDateFromContent from 'helpers/getDateFromContent'

const addNote = createAction('notes/add', ({ name, category, message }) => ({
  payload: {
    id: shortid.generate(),
    name,
    created: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category,
    content: message,
    dates: getDateFromContent(message),
    completed: false,
  },
}))

const updateNote = createAction('notes/update')
const findNoteById = createAction('notes/findById')

const deleteNote = createAction('notes/delete')

const changeFilter = createAction('notes/changeFilter')

const toggleArchived = createAction('notes/toggleArchived')

const actions = { addNote, updateNote, findNoteById, deleteNote, changeFilter, toggleArchived }
export default actions
