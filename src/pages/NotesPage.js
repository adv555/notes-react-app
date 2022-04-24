import { useState } from 'react'
import PageHeading from 'components/PageHeader/PageHeader'
import Section from 'components/Section'
import Modal from 'components/Modal'
import NoteEditor from 'components/NoteEditor'
import NoteList from 'components/NoteList'
import NotesListArchived from 'components/NoteListArchived'
import Filter from 'components/NoteFilter'
import Stats from 'components/Stats'
import AddButton from 'components/Buttons/AddButton'
import { Statistics } from 'components/Statistics'

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

      <Section>
        <NoteList onNoteUpdate={toggleModal} />
      </Section>
      <Section title={'Notes statistics'}>
        <Statistics />
      </Section>
      <Section title={'Archived notes'}>
        <NotesListArchived onNoteUpdate={toggleModal} />
      </Section>

      {showModal && (
        <Modal onClose={toggleModal}>
          <NoteEditor onSave={toggleModal} />
        </Modal>
      )}
    </>
  )
}
