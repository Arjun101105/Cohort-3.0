import { Children, createContext, useContext, useState } from 'react'

import './App.css'

const CountContext = createContext();

function CountContextProvider({children}){
  const [count, setCount] = useState(0);

  return<div>
    <CountContext.Provider value={{count,setCount}}>
      {children}
    </CountContext.Provider>
  </div>

}

function App() {
  
  return<div>
    <CountContextProvider>

    <Increase/>
    <Decrease/>
    <Value/>

    </CountContextProvider>
  </div>

}

function Increase(){
  const {count, setCount} = useContext(CountContext)
  return <button onClick={()=>setCount(count+1)}>Increase</button>
}

function Decrease(){
  const {count,setCount} = useContext(CountContext);
  return <button onClick={()=>setCount(count-1)}>Decrease</button>
}

function Value(){
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>
}

export default App
