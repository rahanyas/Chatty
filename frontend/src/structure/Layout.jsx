import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar.compo"
import Footer from '../components/Footer.compo'
const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout