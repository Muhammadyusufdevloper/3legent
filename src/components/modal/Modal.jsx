import PropTypes from 'prop-types';
import "./Modal.scss";

const Modal = ({ children, setModalOpen }) => {
    return (
        <>
            <div className='modal-overly' onClick={() => setModalOpen(false)}></div>
            <div className='modal'>
                {children}
            </div>
        </>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired
};

export default Modal;
