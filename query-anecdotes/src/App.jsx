import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import { getAll, updateAnecdote } from './requests';
import { useContext } from 'react'
import NotificationContext from './NotificationContext';

const App = () => {
  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (anecdote) => {
      queryClient.invalidateQueries({queryKey: ["anecdotes"]})
      handleVote(anecdote)
    },
    onError: (response) => {
      console.log(response.error);
    }
  })
  const [notification, notificationDispatch] = useContext(NotificationContext)

  const handleVote = (anecdote) => {
    console.log('vote')
    notificationDispatch({
      type:'VOTE',
      payload: anecdote.content
    })
    setTimeout(() => {
      notificationDispatch({type: 'CLEAR'})
    }, 5000)
  }

  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAll,
  })
  console.log(JSON.parse(JSON.stringify(result)))

  if (result.status === 'pending') {
    return <span>Loading...</span>
  }

  if (result.status === 'error') {
    return <span>Error: {result.error.message} anecdote service not available due to problems in server</span>
  }

  const anecdotes = result.data

  

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes+1})}>vote</button>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  )
}

export default App
