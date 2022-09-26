import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from '../context';

import { publicRoutes, privateRoutes } from '../router/routers';
const AppRouter = () => {
    const { isAuth } = React.useContext(AuthContext)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )}
                <Route path="/*" element={<Navigate to="/post" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    )
}

export default AppRouter