import PropTypes from 'prop-types'
import IconButton from 'components/Buttons/IconButtonWrapper'
import ArchiveIcon from '@mui/icons-material/Archive'

const ArchiveButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Archive note">
    <ArchiveIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

ArchiveButton.defaultProps = {
  onClick: () => null,
}

ArchiveButton.propTypes = {
  onClick: PropTypes.func,
}
export default ArchiveButton
