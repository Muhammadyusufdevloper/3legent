import SideBar from '../../components/side-bar/SideBar'
import { Outlet } from 'react-router-dom'
import './admin.scss'
const Admin = () => {
    return (
        <>
            <div className='admin'>
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Admin