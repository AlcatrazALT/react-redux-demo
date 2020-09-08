import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import CounterContainer from './components/CounterContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CounterContainer />
      </div>
    </Provider>
  )
}

export default App
