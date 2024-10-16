import {configureStore} from '@reduxjs/toolkit'

import anecdoteReducer from './anecdoteReducer'
import filterReducer from './filterReducer'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    anecdotes: anecdoteReducer
  }
})

export default store