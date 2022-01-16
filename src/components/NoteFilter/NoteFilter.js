import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFilter } from 'redux/notes/notes.selectors'
import s from './NoteFilter.module.scss'
import actions from 'redux/notes/notes.actions'

const NoteFilter = () => {
  const value = useSelector(getFilter)
  const dispatch = useDispatch()
  console.log(value)

  return (
    <div className={s.noteFilter}>
      {/* <p className={s.noteFilterLabel}>Filter your notes</p> */}
      <input
        type="text"
        className={s.noteFilterInput}
        placeholder="Filter your notes"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </div>
  )
}

export default NoteFilter
