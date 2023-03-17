import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";


export const CreatePost = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        signOut(() => navigate('/', {replace: true}))
    }

    return (
        <div>
            <h1>CREATE NEW POST</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}