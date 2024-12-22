import axios from 'axios'
import {atom, selector} from 'recoil'

export const notifications = atom({
    key:"networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async()=>{
            const res = await axios.get("https://mocki.io/v1/3f0e75d2-dd1a-4848-9239-45cd5180c36c")
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const allNotifications = get(notifications);
        return allNotifications.network+allNotifications.messages+allNotifications.jobs+allNotifications.notifications
    }
})