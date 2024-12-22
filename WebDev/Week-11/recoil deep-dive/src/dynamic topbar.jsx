import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"


function App(){
  
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>

}

function MainApp(){

  const networkNotificationCount = useRecoilValue(networkAtom)
  const messagingNotificationCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
  return<div>
    <button>Home</button>

    <button>My Network  {networkNotificationCount >=100 ? "(99+)" : "("+networkNotificationCount+")"}</button>
    <button>Jobs {jobsNotificationCount == 0 ? "" : "("+jobsNotificationCount+")"}</button>
    <button>Messaging {messagingNotificationCount == 0 ? "" : "("+messagingNotificationCount+")"}</button>
    <button>Notifications {notificationCount == 0 ? "" : "("+notificationCount+")"}</button>


    <button>Me {totalNotificationCount == 0 ? "" : "("+totalNotificationCount+")"}</button>
    
  </div>
}
export default App