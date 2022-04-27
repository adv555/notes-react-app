import { INote } from './types'

export const getNotes = (state: { notes: { items: INote[] } }) => state.notes.items
export const getFilter = (state: { notes: { filter: string } }) => state.notes.filter
export const getNoteId = (state: { notes: { note: number | null } }) => state.notes.note

export const getNoteById = (state: { notes: any }) => {
  const notes = getNotes(state)
  const note = notes.filter(note => note.id === state.notes.note)
  return note
}

export const getVisibleNotes = (state: { notes: any }) => {
  const notes = getNotes(state)
  const filter = getFilter(state)
  const normalizedFilter = filter.toLowerCase()

  return notes.filter(({ content }) => content.toLowerCase().includes(normalizedFilter))
}

export const getStatistics = (state: { notes: { items: INote[] } }) => {
  const notes = getNotes(state)
  const statistics = notes.reduce((stats: any[], note) => {
    const category = stats.find(stat => stat.category.toLowerCase() === note.category.toLowerCase())
    if (!category) {
      return [
        ...stats,
        {
          category: note.category,
          active: note.completed ? 0 : 1,
          completed: note.completed ? 1 : 0,
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
