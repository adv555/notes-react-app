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

const NoteHeader = ({ Name, Created, Category, Content, Dates }) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>{Name}</StyledTableCell>
        <StyledTableCell align="left">{Created}</StyledTableCell>
        <StyledTableCell align="left">{Category}</StyledTableCell>
        <StyledTableCell align="left">{Content}</StyledTableCell>
        <StyledTableCell align="left">{Dates}</StyledTableCell>
        <StyledTableCell align="center"></StyledTableCell>
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
