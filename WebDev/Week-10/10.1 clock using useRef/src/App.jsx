import React, { useState, useRef } from "react"

// a clock with a start and stop button 

function App() {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    
    const startTimer = () => {
        if(intervalRef.current !== null) return; // already running ... dont do anything 

        intervalRef.current = setInterval(()=>{
            setTime( ( prevTime ) => prevTime + 1);
        },1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }


    return <div>
        <h1>Timer: {time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        </div>
 
}

export default App
