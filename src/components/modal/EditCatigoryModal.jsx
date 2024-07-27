import { useUpdateCategoryMutation } from "../../context/api/categoryApi";
import { useGetValue } from "../../hooks/useGetValue";
import PropTypes from 'prop-types';
import { useEffect } from "react";
const initialState = {
    title: ""
};

const EditCategoryModal = ({ modalData, setModalData }) => {
    const { formData, handleChange, setFormData } = useGetValue(initialState);
    const [categoryEdit, { isSuccess }] = useUpdateCategoryMutation();
    useEffect(() => {
        if (isSuccess) {
            setModalData(null)
        }
    }, [isSuccess]);

    useEffect(() => {
        if (modalData) {
            setFormData(modalData);
        }
    }, [modalData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        categoryEdit({ id: modalData.id, body: formData });
    };

    return (
        <>
            <div onClick={() => setModalData(null)} className='modal-overly'></div>
            <div className='modal'>
                <form onSubmit={handleSubmit}>
                    <div className='create-product__card'>
                        <label className='create-product__label' htmlFor="title">Title</label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className='create-product__input'
                            id='title'
                            type="text"
                            placeholder='Title'
                        />
                    </div>
                    <div className='modal__buttons-wrapper modal__buttons'>
                        <button onClick={() => setModalData(false)} type="button">Close</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

EditCategoryModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
};

export default EditCategoryModal;
