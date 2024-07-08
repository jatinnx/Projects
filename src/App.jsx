import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Xmain from './components/Xmain'
import Xfoot from './components/Xfoot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='all-container'>
      <Xmain></Xmain>
      <Xfoot></Xfoot>
    </section>
    
  )
}

export default App
