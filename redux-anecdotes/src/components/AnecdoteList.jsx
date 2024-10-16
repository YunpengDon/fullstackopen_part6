import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'

const AnecdotesList = () => {
  // const anecdotes = useSelector(state => state.anecdotes)
  // const anecdotes = useSelector(({filter, anecdotes}) => anecdotes.filter(n => n.content.toLowerCase().includes(filter.toLowerCase())))
  
  const selectFilter = state => state.filter
  const selectAnecdotes = state => state.anecdotes
  const selectFilteredAnecdotes = createSelector(
    [selectFilter, selectAnecdotes],
    (filter, anecdotes) => {
      return anecdotes.filter(n => n.content.toLowerCase().includes(filter.toLowerCase()))
    }
  )
  const anecdotes = useSelector(selectFilteredAnecdotes)
  
  const dispatch = useDispatch()
  
  const vote = (id) => {
    dispatch({
      type: 'anecdotes/voteAnecdote',
      payload: {
        id: id
      }
    })
  }

  return (
    <>
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
    </>
  )
}

export default AnecdotesList