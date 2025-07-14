
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router'
import { Loading } from './Loading';

function AppLayout() {
  const navigate=useNavigate();
  if(navigate.state==="loading") return <Loading/>
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
