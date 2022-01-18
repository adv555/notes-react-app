import PropTypes from 'prop-types'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from 'components/Buttons/IconButtonWrapper'

const EditButton = ({ onClick }) => (
  <IconButton onClick={onClick} type="button" aria-label="Edit note">
    <EditIcon sx={{ color: '#7986cb' }} />
  </IconButton>
)

EditButton.defaultProps = {
  onClick: () => null,
}

EditButton.propTypes = {
  onClick: PropTypes.func,
}

export default EditButton
