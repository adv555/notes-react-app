import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from 'redux/notes/notes.actions'
const initialState = [
  {
    id: '1',
    name: 'Shopping list',
    date: 'April 20,2021',
    category: 'Task',
    content: 'tomato, apple, juice',

    completed: true,
  },
  {
    id: '2',
    name: 'The theory of evolution',
    date: 'April 27,2021',
    category: 'Random Thought',
    content: 'need to purchase',
    completed: false,
  },
  {
    id: '3',
    name: 'New Feature',
    date: 'May 05,2021',
    category: 'Idea',
    content: 'deadline 05/06/2021',
    completed: true,
  },
  {
    id: '4',
    name: 'William Gadis',
    date: 'May 07,2021',
    category: 'Random Thought',
    content: 'deadline 05/06/2021',
    completed: false,
  },
  {
    id: '5',
    name: 'Books',
    date: 'May 15,2021',
    category: 'Random Thought',
    content: "Don't forget to read if you bought",

    completed: false,
  },
  {
    id: '6',
    name: 'Task#1',
    date: 'May 15,2021',
    category: 'Task',
    content: 'Get ready for a new tasks',

    completed: false,
  },
  {
    id: '7',
    name: 'Random Thought',
    date: 'May 15,2021',
    category: 'Idea',
    content: 'Create somethig...',

    completed: false,
  },
]

const items = createReducer(initialState, {
  [actions.addNote]: (state, { payload }) => [...state, payload],
  [actions.deleteNote]: (state, { payload }) => state.filter(note => note.id !== payload),
  [actions.toggleArchived]: (state, { payload }) =>
    state.map(note => (note.id === payload ? { ...note, completed: !note.completed } : note)),
})

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
})
