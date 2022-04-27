import IconButton from 'components/Buttons/SquareButtonWrapper'
import { MdAddTask } from 'react-icons/md'
import { Props } from 'components/Buttons/types/button'

const AddButton: React.FC<Props> = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Add note">
    Add Note <MdAddTask />
  </IconButton>
)

export default AddButton
