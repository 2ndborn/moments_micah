import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()

export const useCurrentUser = () => useContext(CurrentUserContext)
export const useSetCurrentUser = () => useContext(SetCurrentUserContext)


export const CurrentUserProvider = ({Children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    
    const handleMount = async () => {
        try {
            const { data } = await axios.get('/dj-rest-auth/user/')
            setCurrentUser({ data })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleMount()
    }, [])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                {Children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )
}