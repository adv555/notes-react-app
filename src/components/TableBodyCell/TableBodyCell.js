import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import EditButton from 'components/Buttons/EditButton'
import DeleteButton from 'components/Buttons/DeleteButton'
import ArchiveButton from 'components/Buttons/ArchivedButton'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: '#7986cb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const Note = ({ name, created, category, text, dates, completed, onEdit, onToggle, onDelete }) => {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        {name}
      </StyledTableCell>
      <StyledTableCell align="left">{created}</StyledTableCell>
      <StyledTableCell align="left">{category}</StyledTableCell>
      <StyledTableCell align="left">{text}</StyledTableCell>
      <StyledTableCell align="left">{dates}</StyledTableCell>
      <StyledTableCell align="center">
        <EditButton onClick={onEdit} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <ArchiveButton onClick={onToggle} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <DeleteButton onClick={onDelete} />
      </StyledTableCell>
    </>
  )
}

export default Note
