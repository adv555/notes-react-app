import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from 'redux/notes/notes.actions'

const initialState = [
  {
    id: '1',
    name: 'Shopping list',
    created: 'April 27,2021',
    category: 'Task',
    content: 'tomato, apple, juice',
    dates: [],
    completed: true,
  },
  {
    id: '2',
    name: 'The theory of evolution',
    created: 'April 27,2021',
    category: 'Random Thought',
    content: 'need to purchase',
    dates: [],
    completed: false,
  },
  {
    id: '3',
    name: 'New Feature',
    created: 'May 05,2021',
    category: 'Idea',
    content: 'deadline 05-06-2021',
    dates: ['05-06-2021'],
    completed: true,
  },
  {
    id: '4',
    name: 'William Gadis',
    created: 'May 07,2021',
    category: 'Random Thought',
    content: 'deadline 05-06-2021',
    dates: ['05-06-2021'],
    completed: false,
  },
  {
    id: '5',
    name: 'Books',
    created: 'May 15,2021',
    category: 'Random Thought',
    content: "Don't forget to read if you bought",
    dates: [],
    completed: false,
  },
  {
    id: '6',
    name: 'Task#1',
    created: 'May 15,2021',
    category: 'Task',
    content: 'Get ready for a new tasks',
    dates: [],
    completed: false,
  },
  {
    id: '7',
    name: 'Random Thought',
    created: 'May 15,2021',
    category: 'Idea',
    content: 'Create somethig...',
    dates: [],
    completed: false,
  },
]

const items = createReducer(initialState, {
  [actions.addNote]: (state, { payload }) => [...state, payload],

  [actions.updateNote]: (state, { payload }) =>
    state.map(note =>
      note.id === payload.id
        ? { ...note, name: payload.name, content: payload.message, category: payload.category }
        : note,
    ),

  [actions.deleteNote]: (state, { payload }) => state.filter(note => note.id !== payload),

  [actions.toggleArchived]: (state, { payload }) =>
    state.map(note => (note.id === payload ? { ...note, completed: !note.completed } : note)),
})

const note = createReducer('', {
  [actions.findNoteById]: (_, { payload }) => payload,
})
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  note,
  filter,
})
