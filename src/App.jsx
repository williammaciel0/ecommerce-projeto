import { useState } from 'react'
import { Header } from './components/Header'
import { PgCompras } from './components/PgCompras'

function App() {
  const [state, setState] = useState({})
  const buscarValores = (result)=> {
    setState(result)
  }
  return (
    <>
     <Header data={state}></Header>
     <PgCompras buscarValores={buscarValores}></PgCompras>
    </>
  )
}

export default App
