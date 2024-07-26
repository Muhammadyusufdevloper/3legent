import { Suspense, lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import WindowLoading from './components/loading/window-loading/WindowLoading';
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
    <Suspense fallback={<WindowLoading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="single-routes/:id" element={<SingleRoutes />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blog />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default memo(App);
