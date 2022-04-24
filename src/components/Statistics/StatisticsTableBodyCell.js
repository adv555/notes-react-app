import React from 'react'
import { styled } from '@mui/material/styles'
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

export function StatisticsTableBodyCell({ category, active, completed }) {
  return (
    <>
      <StyledTableCell component="th" scope="row">
        {category}
      </StyledTableCell>
      <StyledTableCell align="left">{active}</StyledTableCell>
      <StyledTableCell align="center">{completed}</StyledTableCell>
    </>
  )
}
