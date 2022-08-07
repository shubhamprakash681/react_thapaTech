import React from 'react'
import UseState from './Components/Hooks/UseState'
import UseEffect from './Components/Hooks/UseEffect'
import UseReducer from './Components/Hooks/UseReducer'
import './Components/Hooks/style.css'

const App = () => {
  return (
    <>
      <UseState></UseState>
      <UseEffect></UseEffect>
      <UseReducer></UseReducer>
    </>
  )
}

export default App