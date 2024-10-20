import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={reactLogo}></img>
      <p>Welcome Bitches</p>
    </>
  )
}

export default App
