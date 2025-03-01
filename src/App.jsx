import { useState } from 'react'

import './App.css'
import { Componente } from './Component/Componente'

function App() {
  const [count, setCount] = useState('')
  console.log (count)

  return (
    <>
      <Componente componente={setCount} />

    </>
  )
}

export default App
