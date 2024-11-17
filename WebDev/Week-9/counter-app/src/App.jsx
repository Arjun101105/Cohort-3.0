import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
   <div>
    <Counter></Counter>
   </div>

  

  )

  function Counter() {
    const [count, setCount] = useState(0)

    useEffect(function(){

      setInterval(function(){
        setCount(count=>count+1)
      }, 1000);


    },[])
    
    function increaseCount(){
      setCount(count+1)
    }

    function resetCount(){
      setCount(0)
    }

    return <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  }

}

export default App
