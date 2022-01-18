import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ArchiveIcon from '@mui/icons-material/Archive'
import DeleteIcon from '@mui/icons-material/Delete'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import actions from 'redux/notes/notes.actions'
import { getVisibleNotes, getNotes } from 'redux/notes/notes.selectors'
import NoteHeader from 'components/TableHeadCell'
import Note from 'components/TableBodyCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: '#7986cb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const NotesList = () => {
  const notes = useSelector(getVisibleNotes)
  // const notes = useSelector(getNotes)
  const dispatch = useDispatch()

  console.log(notes)

  const onDeleteNote = id => dispatch(actions.deleteNote(id))
  const onToggleArchived = id => dispatch(actions.toggleArchived(id))

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <NoteHeader Name={'Name'} Created={'Created'} Category={'Category'} Content={'Content'} />

        <TableBody>
          {notes.map(({ id, name, date, category, content, completed }) => (
            <StyledTableRow key={id}>
              {!completed && (
                <Note
                  name={name}
                  date={date}
                  category={category}
                  text={content}
                  completed={completed}
                  onToggle={() => onToggleArchived(id)}
                  onDelete={() => onDeleteNote(id)}
                />
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default NotesList

// const NotesList = () => {
//   const notes = useSelector(getVisibleNotes)
//   // const notes = useSelector(getNotes)
//   const dispatch = useDispatch()

//   console.log(notes)

//   const onDeleteNote = id => dispatch(actions.deleteNote(id))
//   const onToggleArchived = id => dispatch(actions.toggleArchived(id))

//   return (
//     <ul className={s.noteList}>
//       {notes.map(({ id, name, date, category, content, completed }) => (
//         <li key={id} className={s.noteListItem}>
//           <Note
//             name={name}
//             date={date}
//             category={category}
//             text={content}
//             completed={completed}
//             onToggleArchived={() => onToggleArchived(id)}
//             onDelete={() => onDeleteNote(id)}
//           />
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default NotesList

// note.actions.js
// date: Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
