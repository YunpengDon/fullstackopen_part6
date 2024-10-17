import { useDispatch } from 'react-redux'
import noteService from '../services/anecdotes'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdotesForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async(event) => {
    event.preventDefault()
    const anecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    const newAnecdote = await noteService.createNew(anecdote)
    dispatch(createAnecdote(newAnecdote))
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