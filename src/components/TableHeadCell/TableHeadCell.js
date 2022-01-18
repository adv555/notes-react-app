import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import ArchiveIcon from '@mui/icons-material/Archive'
import DeleteIcon from '@mui/icons-material/Delete'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: '#7986cb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const NoteHeader = ({ Name, Created, Category, Content }) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>{Name}</StyledTableCell>
        <StyledTableCell align="center">{Created}</StyledTableCell>
        <StyledTableCell align="center">{Category}</StyledTableCell>
        <StyledTableCell align="center">{Content}</StyledTableCell>
        <StyledTableCell align="center">
          <ArchiveIcon />
        </StyledTableCell>
        <StyledTableCell align="center">
          <DeleteIcon />
        </StyledTableCell>
      </TableRow>
    </TableHead>
  )
}

export default NoteHeader
