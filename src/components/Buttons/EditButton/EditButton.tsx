import EditIcon from '@mui/icons-material/Edit'
import IconButton from 'components/Buttons/IconButtonWrapper'
import { Props } from 'components/Buttons/types/button'

const EditButton: React.FC<Props> = ({ onClick }) => (
  <IconButton onClick={onClick} type="button" aria-label="Edit note">
    <EditIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

export default EditButton
