import { useDispatch } from 'react-redux'

const AnecdotesForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch({
      type: 'anecdotes/createAnecdote',
      payload: anecdote
    })
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