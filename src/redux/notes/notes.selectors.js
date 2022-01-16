export const getNotes = state => state.notes.items
export const getFilter = state => state.notes.filter

export const getVisibleNotes = state => {
  const notes = getNotes(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()

  return notes.filter(({ content }) => content.toLowerCase().includes(normalizedFilter))
}
