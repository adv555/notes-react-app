import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
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

const Note = ({ name, date, category, text, completed, onToggle, onDelete }) => {
  return (
    // !completed && (
    <>
      <StyledTableCell component="th" scope="row">
        {name}
      </StyledTableCell>
      <StyledTableCell align="left">{date}</StyledTableCell>
      <StyledTableCell align="center">{category}</StyledTableCell>
      <StyledTableCell align="center">{text}</StyledTableCell>
      <StyledTableCell align="center">
        <ArchiveButton onClick={onToggle} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <DeleteButton onClick={onDelete} />
      </StyledTableCell>
    </>
    // )
  )
}

export default Note

//  !completed && (
//    <>
//      <p className={s.noteListText}>{name}</p>
//      <p className={s.noteListText}>{date}</p>
//      <p className={s.noteListText}>{category}</p>
//      <p className={s.noteListText}>{text}</p>
//      {/* <button type="button" className={s.noteListBtn} onClick={onDelete}>
//         Delete
//       </button> */}
//      <IconButton onClick={onDelete} type="button" aria-label="Delete note">
//        <IconContext.Provider
//          value={{ color: '#3f51b5', size: '1.5em ', className: 'global-class-name' }}
//        >
//          <AiFillDelete />
//        </IconContext.Provider>
//      </IconButton>
//      <input
//        type="checkbox"
//        className={s.NoteListCheckbox}
//        checked={completed}
//        onChange={onToggleArchived}
//      />
//    </>
//  )
