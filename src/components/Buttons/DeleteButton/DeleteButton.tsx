import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from 'components/Buttons/IconButtonWrapper'
import { Props } from '../types/button'

const DeleteButton: React.FC<Props> = ({ onClick }) => (
  <IconButton onClick={onClick} type="button" aria-label="Delete note">
    <DeleteIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

export default DeleteButton
