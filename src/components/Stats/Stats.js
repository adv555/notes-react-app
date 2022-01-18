import React from 'react'
import { connect } from 'react-redux'
import s from './Stats.module.scss'

const Stats = ({ total, completed }) => (
  <div className={s.stats}>
    <p className={s.statsItem}>
      <span className={s.statsValue}>{total}</span>
      <span className={s.statsLabel}>All</span>
    </p>
    <p className={s.statsItem}>
      <span className={s.statsValue}>{completed}</span>
      <span className={s.statsLabel}>Archived</span>
    </p>
  </div>
)

const getCompeltedNotesCount = notes =>
  notes.reduce((total, note) => (note.completed ? total + 1 : total), 0)

const mapStateToProps = state => ({
  total: state.notes.items.length,
  completed: getCompeltedNotesCount(state.notes.items),
})

export default connect(mapStateToProps)(Stats)
