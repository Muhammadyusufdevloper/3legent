import { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import WindowLoading from './components/loading/window-loading/WindowLoading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Auth from './pages/auth/Auth';

const CreateProduct = lazy(() => import('./pages/admin/nested-pages/create-product/CreateProduct'));
const CreateCategory = lazy(() => import('./pages/admin/nested-pages/create-category/CreateCategory'));
const ManageProduct = lazy(() => import('./pages/admin/nested-pages/manage-product/ManageProduct'));
const ManageCategory = lazy(() => import('./pages/admin/nested-pages/manage-category/ManageCategory'));
const Admin = lazy(() => import('./pages/admin/Admin'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const OrderComplete = lazy(() => import('./pages/cart/components/order-complete/OrderComplete'))
const CheckoutDetails = lazy(() => import('./pages/cart/components/checkout-details/CheckoutDetails'));
const ShoppingCart = lazy(() => import('./pages/cart/components/shopping-cart/ShoppingCart'));
const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/home/Home'));
const SingleRoutes = lazy(() => import('./pages/single-rout/SingleRoutes'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const Wishlist = lazy(() => import('./pages/wishlist/Wishlist'));
const NoteFound = lazy(() => import('./pages/note-found/NoteFound'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const Login = lazy(() => import('./pages/login/Login'));

const App = () => {
  return (
    <>
      <Suspense fallback={<WindowLoading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="single-routes/:id" element={<SingleRoutes />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} >
              <Route path='shopping-cart' element={<ShoppingCart />} />
              <Route path='checkout' element={<CheckoutDetails />} />
              <Route path='order' element={<OrderComplete />} />
            </Route>
            <Route path="*" element={<NoteFound />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Auth />} >
            <Route path="admin" element={<Admin />} >
              <Route path="product-create" element={<CreateProduct />} />
              <Route path="create-category" element={<CreateCategory />} />
              <Route path="products" element={<ManageProduct />} />
              <Route path="category" element={<ManageCategory />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default memo(App);
