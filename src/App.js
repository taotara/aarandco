import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Career from './pages/career/Career';
import Clientele from './pages/clientele/Clientele';
import ContactUs from './pages/contactUs/ContactUs';
import OurServices from './pages/ourServices/OurServices';
import AuditAndAccounting from './pages/ourServices/AuditAndAccounting';
import TaxPlaningAndCompliance from './pages/ourServices/TaxPlaningAndCompliance';
import CompanySecretarial from './pages/ourServices/CompanySecretarial';
import HumanResources from './pages/ourServices/HumanResources';
import FinancialAdvisory from './pages/ourServices/FinancialAdvisory';
import Header from './components/header/Header';
import MainNavbar from './components/mainNavbar/MainNavbar';
import TheCompany from './pages/aboutUs/TheCompany';
import OurTeam from './pages/aboutUs/OurTeam';
import {
  Route,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Abioye from './pages/aboutUs/Abioye';
import Akinwale from './pages/aboutUs/Akinwale';
import Akinduntire from './pages/aboutUs/Akinduntire';
import Durotoye from './pages/aboutUs/Durotoye';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // const [pageTitle, setPageTitle] = useState('Default Page Title');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/ourservices" element={<OurServices />} />

        <Route
          path="/services/audit and accounting"
          element={<AuditAndAccounting />}
        />
        <Route
          path="/services/tax planing and compliance"
          element={<TaxPlaningAndCompliance />}
        />
        <Route
          path="/services/company secretarial"
          element={<CompanySecretarial />}
        />
        <Route path="/services/human resources" element={<HumanResources />} />
        <Route
          path="/services/financial advisory"
          element={<FinancialAdvisory />}
        />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/the company" element={<TheCompany />} />
        <Route path="/aboutus/our team" element={<OurTeam />} />
        <Route path="/aboutus/our team/abioye" element={<Abioye />} />
        <Route path="/aboutus/our team/akinwale" element={<Akinwale />} />
        <Route path="/aboutus/our team/akinduntire" element={<Akinduntire />} />
        <Route path="/aboutus/our team/durotoye" element={<Durotoye />} />

        <Route path="/clientele" element={<Clientele />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <ScrollToTop />
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
