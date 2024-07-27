import { useEffect } from 'react';
import { toast } from 'react-toastify';
import "./CreateCategory.scss";
import { useGetValue } from '../../../../hooks/useGetValue';
import { useNavigate } from 'react-router-dom';
import { useCreateCategoryMutation } from '../../../../context/api/categoryApi';

const initialState = {
    title: "Olma",
};

const CreateCategory = () => {
    const { formData, handleChange } = useGetValue(initialState);
    const [createCategory, { isSuccess, isError, isLoading }] = useCreateCategoryMutation();
    const navigate = useNavigate()

    const handleCreate = (e) => {
        e.preventDefault();
        createCategory(formData);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin/category")
        } else if (isError) {
            toast.error("Ma'lumot to'liq yaratilmadi");
        }
    }, [isSuccess, isError]);

    return (
        <div className='create-product'>
            <h1 className='create-product__title'>Create Category</h1>
            <form className='create-product__form' onSubmit={handleCreate}>
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
                <button disabled={isLoading} className='create-product__button' type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCategory;