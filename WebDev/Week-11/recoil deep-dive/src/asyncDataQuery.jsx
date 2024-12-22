import { useEffect } from 'react';
import './App.css'
import { notifications, totalNotificationSelector } from './asyncDataQueries';
import {  RecoilRoot, useRecoilState } from 'recoil'



function App(){
return<div>
  <RecoilRoot>
  <MainApp/>
  </RecoilRoot>
</div>
}


function MainApp(){
  const [networkCount,setNetworkCount]= useRecoilState(notifications)
  const totalNotificationCount = useRecoilState(totalNotificationSelector)


  return<div>
    <button>Home</button>
    <button>My Network {networkCount.network}</button>
    <button>Jobs {networkCount.jobs}</button>
    <button>Messages {networkCount.messages}</button>
    <button>Notifications {networkCount.notifications}</button>
    <button>Me ({totalNotificationCount})</button>
  </div>

}
export default App;