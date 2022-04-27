import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
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

interface Props {
  onNoteUpdate: () => void
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const NotesList: React.FC<Props> = ({ onNoteUpdate }) => {
  const notes = useAppSelector(getVisibleNotes)

  const dispatch = useAppDispatch()

  const onDeleteNote = (id: string | undefined) => dispatch(actions.deleteNote(id))
  const onToggleArchived = (id: any) => dispatch(actions.toggleArchived(id))

  const onEdit = (id: string | null | undefined) => {
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
          {notes.map(
            (note: {
              id: string
              completed: boolean
              name: string
              created: string
              category: string
              content: string
              dates: string[]
            }) => (
              <StyledTableRow key={note.id}>
                {!note.completed && (
                  <Note
                    name={note.name}
                    created={note.created}
                    category={note.category}
                    text={note.content}
                    dates={note.dates}
                    onEdit={() => onEdit(note.id)}
                    onToggle={() => onToggleArchived(note.id)}
                    onDelete={() => onDeleteNote(note.id)}
                  />
                )}
              </StyledTableRow>
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default NotesList
