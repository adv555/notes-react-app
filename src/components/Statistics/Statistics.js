import React from 'react'
import { TableContainer } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Table } from '@mui/material'
import { TableBody } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import { StatisticsTableHead } from 'components/Statistics/StatisticsTableHead'
import { StatisticsTableBodyCell } from 'components/Statistics/StatisticsTableBodyCell'
import { useSelector } from 'react-redux'
import { getStatistics } from 'redux/notes/notes.selectors'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export function Statistics() {
  const statistics = useSelector(getStatistics)
  console.log(statistics)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StatisticsTableHead />
        <TableBody>
          {statistics.map(({ category, active, completed }) => (
            <StyledTableRow key={category}>
              <StatisticsTableBodyCell category={category} active={active} completed={completed} />
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
