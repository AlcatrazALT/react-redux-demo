import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import CounterContainer from './components/CounterContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <CounterContainer />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App
