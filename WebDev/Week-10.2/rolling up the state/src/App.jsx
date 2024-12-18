import { STATES } from "mongoose";
import { useState } from "react"


function App() {


  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [switchOn, setSwitchOn] = useState(true);

  return <div>
    <BulbState switchOn = {switchOn}/>
    <ToggleBulbState switchOn = {switchOn} setSwitchOn = {setSwitchOn} />
  </div>
}

function BulbState({switchOn}){
  return <div>
    {switchOn ? "Switch on" : "Switch off"}
  </div>
}

function ToggleBulbState({switchOn, setSwitchOn}){

  function toggle(){
  // setSwitchOn(!switchOn)    
  setSwitchOn( currentState => !currentState )
  }

  return <div>
    <button onClick={toggle}>Toggle the Bulb</button>
  </div>
}



export default App
