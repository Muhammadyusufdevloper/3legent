import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import SingleRoutes from "./pages/single-rout/SingleRoutes"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="single-routes/:id" element={<SingleRoutes />} />
        </Route>
      </Routes>
    </>
  )
}

export default App