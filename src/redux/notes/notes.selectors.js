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

export const getStatistics = state => {
  const notes = getNotes(state)
  const statistics = notes.reduce((stats, note) => {
    const category = stats.find(stat => stat.category.toLowerCase() === note.category.toLowerCase())
    if (!category) {
      return [
        ...stats,
        {
          category: note.category,
          active: note.completed ? 1 : 0,
          completed: note.completed ? 0 : 1,
          total: 1,
        },
      ]
    }
    note.completed ? category.completed++ : category.active++
    category.total += 1

    return stats
  }, [])

  return statistics
}
