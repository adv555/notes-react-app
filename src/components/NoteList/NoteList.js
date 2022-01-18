import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import actions from 'redux/notes/notes.actions'
import { getVisibleNotes } from 'redux/notes/notes.selectors'
import NoteHeader from 'components/TableHeadCell'
import Note from 'components/TableBodyCell'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const NotesList = ({ onNoteUpdate }) => {
  const notes = useSelector(getVisibleNotes)
  const dispatch = useDispatch()

  const onDeleteNote = id => dispatch(actions.deleteNote(id))
  const onToggleArchived = id => dispatch(actions.toggleArchived(id))

  const onEdit = id => {
    dispatch(actions.findNoteById(id))
    onNoteUpdate()
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <NoteHeader
          Name={'Name'}
          Created={'Created'}
          Category={'Category'}
          Content={'Content'}
          Dates={'Dates'}
        />

        <TableBody>
          {notes.map(({ id, name, created, category, content, dates, completed }) => (
            <StyledTableRow key={id}>
              {!completed && (
                <Note
                  name={name}
                  created={created}
                  category={category}
                  text={content}
                  dates={dates}
                  completed={completed}
                  onEdit={() => onEdit(id)}
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
