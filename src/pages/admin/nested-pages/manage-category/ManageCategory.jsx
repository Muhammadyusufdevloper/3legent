import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useDeleteCategoryMutation, useGetCategoryQuery } from "../../../../context/api/categoryApi";
import "./ManageCategory.scss";
import Modal from "../../../../components/modal/Modal";
import EditCategoryModal from "../../../../components/modal/EditCatigoryModal";
const ManageCategory = () => {
    const { data: categoryData } = useGetCategoryQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [modalData, setModalData] = useState(null);
    const handleDeleteClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setModalOpen(true);
    }
    console.log(categoryData);
    const handleDeleteCategory = () => {
        if (selectedCategoryId) {
            deleteCategory(selectedCategoryId);
            setModalOpen(false);
        }
    }
    let category = categoryData?.map((category) => (
        <div key={category.id} className='manage-category__card'>
            <h3 className="manage-category__card-title">{category.title}</h3>
            <div className='manage-category__buttons'>
                <button onClick={() => setModalData(category)}><CiEdit /></button>
                <button onClick={() => handleDeleteClick(category.id)}><MdDelete /></button>
            </div>
        </div>
    ));
    return (
        <>
            <section className="manage-category">
                <div className="manage-category__wrapper">
                    <h1 className="manage-category__title">Manage Category</h1>
                    <div className='manage-category__cards'>
                        {category}
                    </div>
                </div>
            </section>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
                    <h3 className='modal__text'>Do you agree to delete the selected category?</h3>
                    <div className='modal__buttons-wrapper'>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                        <button onClick={handleDeleteCategory}>Ok</button>
                    </div>
                </Modal>
            )}
            {
                modalData ? <EditCategoryModal modalData={modalData} setModalData={setModalData} /> : <></>
            }
        </>
    )
}

export default ManageCategory