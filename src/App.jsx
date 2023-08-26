import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import Teams from './components/Teams'
import Institute from './components/Institute'
import Mentors from './components/Mentors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Slider/> */}
      <Institute/>
      <Teams/>
      <Mentors/>
    </>
  )
}

export default App
