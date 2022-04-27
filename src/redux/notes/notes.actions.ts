import shortid from 'shortid'
import dayjs from 'dayjs'
import { createAction } from '@reduxjs/toolkit'
import getDateFromContent from 'helpers/getDateFromContent'

const addNote = createAction('notes/add', ({ name, category, message }) => ({
  payload: {
    id: shortid.generate(),
    name,
    created: dayjs().format('MMMM D, YYYY'),
    category,
    content: message,
    dates: getDateFromContent(message),
    completed: false,
  },
}))

const updateNote = createAction<string | any>('notes/update')
const findNoteById = createAction<any>('notes/findById')

const deleteNote = createAction<string | undefined>('notes/delete')

const changeFilter = createAction<string | undefined>('notes/changeFilter')

const toggleArchived = createAction<string | undefined>('notes/toggleArchived')

const actions = { addNote, updateNote, findNoteById, deleteNote, changeFilter, toggleArchived }
export default actions
