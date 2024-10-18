import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { updateVoteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdotesList = () => {
  const dispatch = useDispatch()
  
  const selectFilter = state => state.filter
  const selectAnecdotes = state => state.anecdotes
  const selectFilteredAnecdotes = createSelector(
    [selectFilter, selectAnecdotes],
    (filter, anecdotes) => {
      return anecdotes.filter(n => n.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes)
    }
  )
  
  const anecdotes = useSelector(selectFilteredAnecdotes)
  
  const vote = (id) => {
    dispatch(updateVoteAnecdote(id))
    dispatch(showNotification(`you voted '${anecdotes.filter(n => n.id === id)[0].content}'`,10))
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