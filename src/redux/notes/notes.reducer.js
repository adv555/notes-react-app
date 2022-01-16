import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from 'redux/notes/notes.actions'
// const initialState = [
//   {
//     id: '1',
//     name: 'Shopping list',
//     created: 'April 20,2021',
//     category: 'Task',
//     content: 'tomato, apple, juice',
//     date: [],
//     archived: true,
//   },
//   {
//     id: '2',
//     name: 'The theory of evolution',
//     created: 'April 27,2021',
//     category: 'Random Thought',
//     content: 'need to purchase',
//     date: [],
//     archived: false,
//   },
//   {
//     id: '3',
//     name: 'New Feature',
//     created: 'May 05,2021',
//     category: 'Idea',
//     content: 'deadline 05/06/2021',
//     date: ['05/06/2021'],
//     archived: true,
//   },
//   {
//     id: '4',
//     name: 'William Gadis',
//     created: 'May 07,2021',
//     category: 'Random Thought',
//     content: 'need to purchase',
//     date: [],
//     archived: false,
//   },
//   {
//     id: '5',
//     name: 'Books',
//     created: 'May 15,2021',
//     category: 'Random Thought',
//     content: "Don't forget to read if you bought",
//     date: [],
//     archived: false,
//   },
//   {
//     id: '6',
//     name: 'Task#1',
//     created: 'May 15,2021',
//     category: 'Task',
//     content: 'Get ready for a new tasks',
//     date: [],
//     archived: false,
//   },
//   {
//     id: '7',
//     name: 'Random Thought',
//     created: 'May 15,2021',
//     category: 'Idea',
//     content: 'Create somethig...',
//     date: [],
//     archived: false,
//   },
// ]

const items = createReducer([], {
  [actions.addNote]: (state, { payload }) => [...state, payload],
  [actions.deleteNote]: (state, { payload }) => state.filter(note => note.id !== payload),
  [actions.toggleArchived]: (state, { payload }) =>
    state.map(note => (note.id === payload ? { ...note, archived: !note.archived } : note)),
})

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
})
