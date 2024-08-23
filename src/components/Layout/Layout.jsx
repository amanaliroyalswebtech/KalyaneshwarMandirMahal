
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Social from '../HomeSocial.jsx/Social'
function Layout() {
  return (
   <>
   <Header/>
   <Social/>
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout