// Debouncing 


import { useEffect } from "react";
import { useRef } from "react";

function useDebounce(backendCall){
    const currentClock = useRef();
    
    const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(backendCall, 300)
    }

    return fn
}

function App(){

    function sendDataToBackend(){
        fetch("api.amazon.com/search/")
    }


    // creating a function "debouncedFn" that will use the useDebounce hook to handle request and send backend call

    const debouncedFn = useDebounce(sendDataToBackend);



return<div>
    <input type="text" onChange={debouncedFn} />
</div>
}

export default App;