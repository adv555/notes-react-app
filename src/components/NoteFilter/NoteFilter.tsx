import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { getFilter } from 'redux/notes/notes.selectors'
import s from './NoteFilter.module.scss'
import actions from 'redux/notes/notes.actions'

const NoteFilter: React.FC = () => {
  const value = useAppSelector(getFilter)
  const dispatch = useAppDispatch()

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeFilter(e.target.value))
  }

  return (
    <div className={s.noteFilter}>
      <input
        type="text"
        className={s.noteFilterInput}
        placeholder="Filter by content"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  )
}

export default NoteFilter
