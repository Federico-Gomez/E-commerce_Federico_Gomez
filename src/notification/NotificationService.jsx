import { useState, createContext, useContext } from "react"


const NotificationContext = createContext({
    showNotification: () => {}
})

const Notification = ({ notificationInfo }) => {
    const color = {
        success: " rgb(40, 167, 40)",
        warning: " rgb(212, 181, 40)",
        error: " rgb(212, 41, 11)",
        info: " rgb(19, 152, 214)"
    }

    const notificationStyles = {
        position: "absolute",
        top: 100,
        right: 40,
        backgroundColor: color[notificationInfo.type],
        color: "white",
        borderRadius: 10,
        padding: 20,
        fontSize: 14
}

return (
    <div style={notificationStyles}>
        <h3>{notificationInfo.type}</h3>
        <p>{notificationInfo.text}</p>
    </div>
)
}

export const NotificationProvider = ({ children }) => {

    const [notificationInfo, setNotificationInfo] = useState({
        type: 'success',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationInfo({ type, text })
        setTimeout(() => {
            setNotificationInfo({type, text: ''})
        }, 2800)
    }

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {notificationInfo.text && <Notification notificationInfo={notificationInfo} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}