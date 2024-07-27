import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    let isLogin = JSON.parse(localStorage.getItem('x-auth-token'))
    return isLogin ? <Outlet /> : <Navigate to="/login" />
}

export default Auth 