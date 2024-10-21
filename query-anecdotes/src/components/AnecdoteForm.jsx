import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnecdote } from "../requests";
import { useContext } from "react";
import NotificationContext from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: anecdote => {
      queryClient.invalidateQueries({queryKey: ["anecdotes"]})
      notificationDispatch({
        type:'NEW_NOTE',
        payload: anecdote.content
      })
      setTimeout(() => {
        notificationDispatch({type: 'CLEAR'})
      }, 5000)
    },
    onError: ({response}) => {
      notificationDispatch({
        type:'ERROR',
        payload: response.data.error
      })
      setTimeout(() => {
        notificationDispatch({type: 'CLEAR'})
      }, 5000)
    }
  })
  const [notification, notificationDispatch] = useContext(NotificationContext)

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
