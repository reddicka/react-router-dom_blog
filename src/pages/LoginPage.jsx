import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";


export const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // достаем функцию из контекста
    const {signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        // достаем введенного пользователя по name ноды инпута и его значения
        const user = form.username.value

        // вызываем callback, который принимает пользователя и callback
        // (при входе это редирект туда, откуда пришли) и делаем невозможным вернуться на LoginPage
        signIn(user, () => navigate(fromPage, {replace: true}))
    }

    return (
        <div>
            <h1>Login page</h1>
            {fromPage}

            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name='username'/>
                </label>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}