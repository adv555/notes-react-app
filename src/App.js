import Container from './components/Container'
import AppBar from './components/AppBar'
import NotesPage from './pages/NotesPage'

export default function App() {
  return (
    <Container>
      <AppBar />
      <NotesPage />
    </Container>
  )
}
