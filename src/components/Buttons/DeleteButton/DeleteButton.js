import PropTypes from 'prop-types'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from 'components/Buttons/IconButtonWrapper'

const DeleteButton = ({ onClick }) => (
  <IconButton onClick={onClick} type="button" aria-label="Delete note">
    <DeleteIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

DeleteButton.defaultProps = {
  onClick: () => null,
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default DeleteButton
