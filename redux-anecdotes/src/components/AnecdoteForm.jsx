import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdotesForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async(event) => {
    event.preventDefault()
    const anecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(anecdote))
  }

  return (
  <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name='newAnecdote'/></div>
      <button>create</button>
    </form>
  </>
  )
}

export default AnecdotesForm