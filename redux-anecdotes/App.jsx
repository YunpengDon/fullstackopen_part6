import { useDispatch } from 'react-redux'
import AnecdotesForm from './src/components/AnecdoteForm'
import AnecdotesList from './src/components/AnecdoteList'
import Filter from './src/components/Filter'
import Notification from './src/components/Notification'
import { useEffect } from 'react'
import { initializeAnecdotes } from './src/reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
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