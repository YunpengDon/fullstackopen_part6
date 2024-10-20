import { createSlice } from "@reduxjs/toolkit"
import anecdoteServices from "../services/anecdotes"

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)


// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action){
      state.push(action.payload)
    },
    updateAnecdote(state, action){
      const id = action.payload.id
      return state.map(anecdotes => anecdotes.id === id ? action.payload : anecdotes)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const { appendAnecdote, updateAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll()
    console.log(anecdotes);
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateVoteAnecdote = (id) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteServices.changeVote(id)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer