import { useNavigate } from "react-router-dom"
import "./Empty.scss"
const Empty = ({ images }) => {
    let navigate = useNavigate()
    return (
        <>
            <div className='empty'>
                <img alt='empty omg' src={images} />
                <div className='empty__buttons'>
                    <button onClick={() => navigate("/")}>Go to home</button>
                    <button onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
        </>
    )
}

export default Empty