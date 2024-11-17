import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counterVisible, setCounterVisible] = useState(true);


  useEffect(function(){
    setInterval(() => {
      setCounterVisible(c=>!c)
    }, 5000);
  },[])


  return (
   <div>
  {counterVisible ? <Counter></Counter>: null} 
    
   </div>

  

  )

    function Counter() {
    const [count, setCount] = useState(0)

    useEffect(function(){
      console.log(`on mounting ... `);

      let clockCounter = setInterval(function(){
        console.log(`from inside setInterval`);
        setCount(count=>count+1)
      }, 1000);

      return function(){
        console.log(`unmounting`);
        clearInterval(clockCounter)
      }

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
