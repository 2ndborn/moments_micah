import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const UseRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('/dj-rest-auth/token/refresh/')
                //if user is logged in m the code below will run.
                if(userAuthStatus === 'loggedIn'){
                    history.push('/')
                }
            } catch(err) {
                // If user is not logged in, the coe below will run.
                if (userAuthStatus === 'loggedOut') {
                    history.push('/')
                }
            }
        }
        handleMount();
    }, [history, userAuthStatus])
}