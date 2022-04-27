import React from 'react'
import { connect } from 'react-redux'
import s from './Stats.module.scss'

interface StatsProps {
  total: number
  completed: number
}

const Stats: React.FC<StatsProps> = ({ total, completed }) => (
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

const getCompletedNotesCount = (notes: any) =>
  notes.reduce(
    (total: number, note: { completed: number }) => (note.completed ? total + 1 : total),
    0,
  )

const mapStateToProps = (state: { notes: { items: string | any[] } }) => ({
  total: state.notes.items.length,
  completed: getCompletedNotesCount(state.notes.items),
})

export default connect(mapStateToProps)(Stats)
