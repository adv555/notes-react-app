import PropTypes from 'prop-types'
import IconButton from 'components/Buttons/SquareButtonWrapper'
import { MdAddTask } from 'react-icons/md'

const AddButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Add note">
    Add Note <MdAddTask />
  </IconButton>
)

AddButton.defaultProps = {
  onClick: () => null,
}

AddButton.propTypes = {
  onClick: PropTypes.func,
}
export default AddButton
