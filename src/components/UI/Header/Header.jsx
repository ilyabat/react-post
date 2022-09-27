import React from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Header = () => {
    const { isAuth, setIsAuth } = React.useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <header className='header'>
            <div className='header__container'>
                <a href='#' className='header__logo'>
                    PostJSON
                </a>
                <div className="header__items">
                    <Link to="/about">Про сайт</Link>
                    <Link to="/post">Пости</Link>
                </div>
                <div>
                    <MyButton onClick={logout}>Вийти</MyButton>
                </div>
            </div>
        </header>
    )
}

export default Header