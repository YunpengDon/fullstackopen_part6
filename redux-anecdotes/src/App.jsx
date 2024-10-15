import { useSelector, useDispatch } from 'react-redux'
import { asObject } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const action  ={
      type: 'VOTE',
      payload: {
        id: id
      }
    }
    dispatch(action)
  }

  const createAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log(`create new anecdote: ${anecdote}`);
    const action = {
      type: 'NEW_ANECDOTE',
      payload: asObject(anecdote)
    }
    dispatch(action)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name='newAnecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App