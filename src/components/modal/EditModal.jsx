import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useGetValue } from "../../hooks/useGetValue";
import { useUpdateProductMutation } from "../../context/api/productApi";
import PropTypes from 'prop-types';
import { useEffect } from "react";
const initialState = {
    title: "",
    images: "",
    price: "",
    stock: "",
    oldPrice: "",
    category: "",
    description: "",
    rating: ""
};

const EditModal = ({ modalData, setModalData }) => {
    const { formData, handleChange, setFormData } = useGetValue(initialState);
    const { data: categoryData } = useGetCategoryQuery();
    const [productEdit, { isSuccess }] = useUpdateProductMutation();

    const categoryOptions = categoryData?.map((category) => (
        <option key={category.id} value={category.title}>{category.title}</option>
    ));
    useEffect(() => {
        if (isSuccess) {
            setModalData(null)
        }
    }, []);
    useEffect(() => {
        if (modalData) {
            setFormData(modalData);
        }
    }, [modalData]);
    const handleSubmit = (e) => {
        e.preventDefault();
        productEdit({ id: modalData.id, body: formData });
    };

    return (
        <>
            <div onClick={() => setModalData(null)} className='modal-overly'></div>
            <div className='modal'>
                <form onSubmit={handleSubmit}>
                    <div className='create-product__cards'>
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
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="images">Images</label>
                            <input
                                name="images"
                                value={formData.images}
                                onChange={handleChange}
                                className='create-product__input'
                                id='images'
                                type="text"
                                placeholder='Images'
                                required
                            />
                        </div>
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="price">Price</label>
                            <input
                                name="price"
                                value={+formData.price}
                                onChange={handleChange}
                                required
                                className='create-product__input'
                                id='price'
                                type="number"
                                placeholder='Price'
                            />
                        </div>
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="stock">Stock</label>
                            <input
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                                className='create-product__input'
                                id='stock'
                                type="number"
                                placeholder='Stock'
                            />
                        </div>
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="oldPrice">Old price</label>
                            <input
                                name="oldPrice"
                                value={formData.oldPrice}
                                onChange={handleChange}
                                required
                                className='create-product__input'
                                id='oldPrice'
                                type="number"
                                placeholder='Old Price'
                            />
                        </div>
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="category">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className='create-product__input'
                                id='category'
                            >
                                <option value="" disabled>Select Category</option>
                                {categoryOptions}
                            </select>
                        </div>
                        <div className='create-product__card'>
                            <label className='create-product__label' htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className='create-product__textarea'
                                id='description'
                                placeholder='Description'
                                maxLength={1000}
                            />
                        </div>
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

EditModal.propTypes = {
    modalData: PropTypes.object.isRequired,
    setModalData: PropTypes.func.isRequired,
};

export default EditModal;
