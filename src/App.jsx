import { useState } from 'react'
import Carousal from './component/slide'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Carousal/>
    </>
  )
}

export default App
