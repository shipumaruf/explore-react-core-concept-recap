import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React core concept recap</h1>
      <Posts></Posts>
      
    </>
  )
}

export default App
