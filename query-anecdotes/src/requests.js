import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = () => 
  axios.get(baseUrl).then(response => response.data)

export const createAnecdote = newAnecdote => 
  axios.post(baseUrl, newAnecdote).then(response => response.data)

export const updateAnecdote = newAnecdote => 
  axios.put(`${baseUrl}/${newAnecdote.id}`, newAnecdote).then(response => response.data)