import { useEffect, useState } from "react";
import Category from "../../../../components/category/Category";
import ProductItems from "../../../../components/product-item/ProductItems";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import { useDeleteProductMutation, useGetProductsQuery } from "../../../../context/api/productApi";
import './ManageProduct.scss';
import ProductItemLoading from "../../../../components/loading/product-section-item/ProductItemLoading";
import Pagination from "@mui/material/Pagination"; // Assuming you're using MUI's Pagination
import Modal from "../../../../components/modal/Modal";

const ManageProduct = () => {
    const [categoryValue, setCategoryValue] = useState("all");
    const category = categoryValue === "all" ? "" : categoryValue;
    const [page, setPage] = useState(1);
    const { data: lengthData } = useGetProductsQuery({ category });
    const { data, isLoading, isFetching } = useGetProductsQuery({ category, limit: 8, page });
    const { data: categories } = useGetCategoryQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleChange = (event, value) => {
        setPage(value);
    };

    let count = Math.ceil((lengthData?.length || 0) / 8);

    useEffect(() => {
        window.scrollTo(0, 50);
    }, [page]);

    const processedData = data?.map(item => ({
        ...item,
        id: Number(item.id)
    })) || [];

    const handleDeleteProduct = () => {
        if (selectedProductId) {
            deleteProduct(selectedProductId)
            setModalOpen(false);
        }
    };

    return (
        <>
            <section className="manage-product">
                <div className="manage-product__wrapper">
                    <h1 className="manage-product__title">Manage Product</h1>
                    <Category categoryValue={categoryValue} setCategoryValue={setCategoryValue} category={categories} />
                    {isLoading || isFetching ? (
                        <ProductItemLoading />
                    ) : (
                        <ProductItems
                            data={processedData}
                            isButtons={true}
                            setSelectedProductId={setSelectedProductId}
                            setModalOpen={setModalOpen}
                        />
                    )}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "24px", marginBottom: "24px" }}>
                        <Pagination siblingCount={0} count={count} page={page} onChange={handleChange} />
                    </div>
                </div>
            </section>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
                    <h3 className='modal__text'>Do you agree to delete the selected product?</h3>
                    <div className='modal__buttons-wrapper'>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                        <button onClick={handleDeleteProduct}>Ok</button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default ManageProduct;
