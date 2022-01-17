import { useState } from 'react'
import PageHeading from 'components/PageHeader/PageHeader'
import Section from 'components/Section'
import Modal from 'components/Modal'
import NoteEditor from 'components/NoteEditor'
import NoteList from 'components/NoteList'
import Filter from 'components/NoteFilter'
import Stats from 'components/Stats'
import AddButton from 'components/Buttons/AddButton'

export default function NotesPage() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(showModal => !showModal)
  }

  return (
    <>
      <PageHeading title="NOTES APP" />
      <Section>
        <Filter />
        <Stats />
        <AddButton onClick={toggleModal} />
      </Section>

      <NoteList />

      {showModal && (
        <Modal onClose={toggleModal}>
          <NoteEditor onSave={toggleModal} />
        </Modal>
      )}
    </>
  )
}
