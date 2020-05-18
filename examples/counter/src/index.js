import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    // value.getState() -> from the redux store
    value={store.getState()}
    // on increment, dispatch the type 
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    // on decrement, dispatch the type
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)
