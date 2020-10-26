import Header from './Header';
import Footer from './Footer';
const Layout = ({children}) => (
 <div >

  <Header/>
  <div className="container mx-auto" >
{children}
  </div>
  <Footer/>
  </div>
)

export default Layout