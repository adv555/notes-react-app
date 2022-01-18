export const getNotes = state => state.notes.items
export const getFilter = state => state.notes.filter
export const getNoteId = state => state.notes.note

export const getNoteById = state => {
  const notes = getNotes(state)
  const note = notes.filter(note => note.id === state.notes.note)
  return note
}

export const getVisibleNotes = state => {
  const notes = getNotes(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()

  return notes.filter(({ content }) => content.toLowerCase().includes(normalizedFilter))
}
