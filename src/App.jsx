import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import SingleRoutes from "./pages/single-rout/SingleRoutes"
import Shop from "./pages/shop/Shop"
import Blog from "./pages/blog/Blog"
import Wishlist from "./pages/wishlist/Wishlist"
import NoteFound from "./pages/note-found/NoteFound"
import { memo } from "react"
import Cart from "./pages/cart/Cart"
import Login from "./pages/login/Login"

const App = () => {
  return (
    <>
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
    </>
  )
}

export default memo(App)