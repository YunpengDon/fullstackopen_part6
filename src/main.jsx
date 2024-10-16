import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const dispatchHandler = (actionType) => {
    return () => {store.dispatch({type: actionType})} 
  }
  

  return (
    <div>
      <button onClick={dispatchHandler('GOOD')}>good</button> 
      <button onClick={dispatchHandler('OK')}>ok</button> 
      <button onClick={dispatchHandler('BAD')}>bad</button>
      <button onClick={dispatchHandler('ZERO')}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
