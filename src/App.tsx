import './App.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import RenderRoute from './route/RenderRoute'

function App() {
  return (
    <RouterProvider router={RenderRoute} />
  )
}

export default App
