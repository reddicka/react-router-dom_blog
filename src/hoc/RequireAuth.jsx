import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";


export const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()

    if (!user) {
        // если не авторизованы, то идем на страницу логина
        // также, передаем туда место, откуда пришли, чтобы вернуться
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children
}