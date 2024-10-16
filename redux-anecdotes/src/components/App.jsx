import AnecdotesForm from './AnecdoteForm'
import AnecdotesList from './AnecdoteList'
import Filter from './Filter'
import Notification from './Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  )
}

export default App