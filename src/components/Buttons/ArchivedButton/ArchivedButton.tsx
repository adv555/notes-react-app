import IconButton from 'components/Buttons/IconButtonWrapper'
import ArchiveIcon from '@mui/icons-material/Archive'
import { Props } from 'components/Buttons/types/button'

const ArchiveButton: React.FC<Props> = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Archive note">
    <ArchiveIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

export default ArchiveButton
