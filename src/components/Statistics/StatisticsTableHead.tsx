import React from 'react'
import { styled } from '@mui/material/styles'
import { TableHead } from '@mui/material'
import { TableRow } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: '#7986cb',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export function StatisticsTableHead(): JSX.Element {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left">Note Category</StyledTableCell>
        <StyledTableCell align="left">Active</StyledTableCell>
        <StyledTableCell align="center">Archived</StyledTableCell>
      </TableRow>
    </TableHead>
  )
}
