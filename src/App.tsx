import React from 'react'
import Container from './components/Container'
import AppBar from './components/AppBar'
import NotesPage from './pages/NotesPage'

const App: React.FC = () => {
  return (
    <Container>
      <AppBar />
      <NotesPage />
    </Container>
  )
}
export default App
