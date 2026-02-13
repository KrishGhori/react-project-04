import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Button from './Components/Button'

function App() {
  
  const [count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick = {handleClick} text="Click me">
        <h1>Total Count is {count}.</h1>
      </Button> 
    </div>
      
    // <Card name="krish ghori">
    //   <h1>hello</h1>
    //   <p>my self krish</p>
    //   <p>kese hoo</p>
    // </Card>
   
      
    
  )
}

export default App
