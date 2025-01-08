import { useState } from 'react'
//components
import LeftSide from "./components/LeftSide.jsx"
//import RightSide from "./components/RightSide.jsx"

function App() {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  }


  return (
    <div className='app'>
      <LeftSide handleChange={handleInputChange} inputValue={name}/>
    </div>
  )
}

export default App
