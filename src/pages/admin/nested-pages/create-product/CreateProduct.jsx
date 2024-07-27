import { useEffect } from 'react';
import { toast } from 'react-toastify';
import "./CreateProduct.scss";
import { useGetValue } from '../../../../hooks/useGetValue';
import { useGetCategoryQuery } from '../../../../context/api/categoryApi';
import { useCreateProductMutation } from '../../../../context/api/productApi';
import { useNavigate } from 'react-router-dom';

const initialState = {
    title: "Olma",
    images: "",
    price: "123454",
    stock: "234234",
    oldPrice: "34",
    category: "",
    description: "Salom bu olma bu olmaaaaa👼",
    rating: 4.67
};

const CreateProduct = () => {
    const { formData, handleChange } = useGetValue(initialState);
    const [createProduct, { isSuccess, isError, isLoading }] = useCreateProductMutation();
    const { data: categoryData } = useGetCategoryQuery();
    const navigate = useNavigate()
    const categoryOptions = categoryData?.map((category) => (
        <option key={category.id} value={category.title}>{category.title}</option>
    ));


    const handleCreate = (e) => {
        e.preventDefault();
        createProduct(formData);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin/products")
        } else if (isError) {
            toast.error("Ma'lumot to'liq yaratilmadi");
        }
    }, [isSuccess, isError]);

    return (
        <div className='create-product'>
            <h1 className='create-product__title'>Create Product</h1>
            <form className='create-product__form' onSubmit={handleCreate}>
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
                            value={formData.price}
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
                        <label className='create-product__label' htmlFor="discountPercentage">Old price</label>
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
                <button disabled={isLoading} className='create-product__button' type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;