import { Component } from 'react'
import PageHeading from 'components/PageHeader/PageHeader'
import IconButton from 'components/IconButton'
import { MdAddTask } from 'react-icons/md'
import Modal from 'components/Modal'
import NoteEditor from 'components/NoteEditor'
import NoteList from 'components/NoteList'
import Filter from 'components/NoteFilter'
import Stats from 'components/Stats'

const barStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
}

export default class NotesPage extends Component {
  state = {
    showModal: false,
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  render() {
    const { showModal } = this.state
    return (
      <>
        <PageHeading title="NOTES APP" />
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Add note">
            <MdAddTask />
          </IconButton>
        </div>
        <div style={barStyles}>
          <NoteList />
        </div>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <NoteEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </>
    )
  }
}
