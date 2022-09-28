import React from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')

    }
    return (
        <div className='wrapper'>
            <div className="login">
                <h1>Сторінка логіна</h1>
                <p>Для того щоб ввійти просто нажміть вхід</p>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder='Login' />
                    <MyInput type="password" placeholder='Password' />
                    <div className="login__btn">
                        <MyButton>Вхід</MyButton>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login