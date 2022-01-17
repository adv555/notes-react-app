export const getNotes = state => state.notes.items
export const getFilter = state => state.notes.filter

export const getVisibleNotes = state => {
  const notes = getNotes(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()

  return notes.filter(({ content }) => content.toLowerCase().includes(normalizedFilter))
}

// export const getDate = state => {
//   const notes = getNotes(state)
//   return notes.map(note => note.date.split('T')[0])
// }
