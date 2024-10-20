import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useQueryClient, useMutation} from "@tanstack/react-query";
import { getAll, updateAnecdote } from './requests';

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
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

  const queryClient = useQueryClient()
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["anecdotes"]})
    }
  })

  return (
    <div>
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
    </div>
  )
}

export default App
