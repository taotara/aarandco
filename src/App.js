import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Career from './pages/career/Career';
import Clientele from './pages/clientele/Clientele';
import ContactUs from './pages/contactUs/ContactUs';
import OurServices from './pages/ourServices/OurServices';
import Header from './components/header/Header';
import MainNavbar from './components/mainNavbar/MainNavbar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import Footer from './components/footer/Footer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />} >
      <Route index element={<Home/>} />
      <Route path="/ourservices" element={<OurServices/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/clientele" element={<Clientele/>} />
      <Route path="/career" element={<Career/>} />
      <Route path="/contactus" element={<ContactUs/>} />
    </Route> )
  )
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
