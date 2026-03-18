import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/home";
import "./style/style.css";
import ReklamCart from "./components/reklamCart";
import ReklamCart2 from "./components/reklamCart2";
import Login from "./components/login";
import SighnUp from "./components/sighnUp";
import ForgetPassword from "./components/forgetPassword";
import CartOne from "./components/CartOne";
import CartTwo from "./components/CartTwo";
import CartThree from "./components/CartThree";
import BussnisHome from "./components/brand-bussnis/bussnisHome";
import BussnisMen from "./components/brand-bussnis/bussnisMen";
import BussnisWomen from "./components/brand-bussnis/bussnisWomen";
import CartAllbrand from "./components/brand-bussnis/cartAllbrand";
import FinallPartBuyClothing from "./components/brand-bussnis/finallPartBuyClothing";
import SanvitoHome from "./components/brand-sanvito/sanvitoHome";
import SanvitoallCart from "./components/brand-sanvito/sanvitoallCart";
import SanvitofinallPart from "./components/brand-sanvito/sanvitofinallPart";
import SanvitoMen from "./components/brand-sanvito/sanvitoMen";
import SanvitoWomen from "./components/brand-sanvito/sanvitoWomen";
import Soranclasscart from "./components/brand-soranClass/soranclasscart";
import Soranclassfinallpart from "./components/brand-soranClass/soranclassfinallpart";
import SoranHome from "./components/brand-soranClass/soranHome";
import SoranMen from "./components/brand-soranClass/soranMen";
import SoranWomen from "./components/brand-soranClass/soranWomen";
import Tahircart from "./components/brand-tahir/tahircart";
import Tahirfinallpart from "./components/brand-tahir/tahirfinallpart";
import TahirHome from "./components/brand-tahir/tahirHome";
import TahirWomen from "./components/brand-tahir/tahirWomen";
import TahirMen from "./components/brand-tahir/tahirMen";
import CartforWomen from "./components/brand-bussnis/cartforWomen";
import SanvitocartforWomen from "./components/brand-sanvito/sanvitocartforWomen";
import SorancartforWomen from "./components/brand-soranClass/sorancartforWomen";
import TahircartforWomen from "./components/brand-tahir/tahircartforWomen";
import ShvancartformMen from "./components/brand-shvanCenter/shvancartformMen";
import ShvancartforWomen from "./components/brand-shvanCenter/shvancartforWomen";
import Shvanfinallpartbuy from "./components/brand-shvanCenter/shvanfinallpartbuy";
import ShvanHome from "./components/brand-shvanCenter/shvanHome";
import ShvanMen from "./components/brand-shvanCenter/shvanMen";
import ShvanWomen from "./components/brand-shvanCenter/shvanWomen";
import HRCartformen from "./components/brand-hr/HRCartformen";
import HRCartforwomen from "./components/brand-hr/HRCartforwomen";
import HRfinallpartbuy from "./components/brand-hr/HRfinallpartbuy";
import HrHome from "./components/brand-hr/hrHome";
import HrMen from "./components/brand-hr/hrMen";
import HrWomen from "./components/brand-hr/hrWomen";
import DelmancartMen from "./components/brand-delman/delmancartMen";
import DelmancartWomen from "./components/brand-delman/delmancartWomen";
import Delmanfinallbuy from "./components/brand-delman/delmanfinallbuy";
import DelmanHome from "./components/brand-delman/delmanHome";
import DelmanMen from "./components/brand-delman/delmanMen";
import DelmanWomen from "./components/brand-delman/delmanWomen";
import KcartMen from "./components/brand-kfashion/KcartMen";
import KcartWomen from "./components/brand-kfashion/KcartWomen";
import Kfinallpartbuy from "./components/brand-kfashion/Kfinallpartbuy";
import KHome from "./components/brand-kfashion/kHome";
import KMen from "./components/brand-kfashion/kMen";
import KWomen from "./components/brand-kfashion/kWomen";
import BaycartMen from "./components/brand-baydeniz/baycartMen";
import BaycartWomen from "./components/brand-baydeniz/baycartWomen";
import Bayfinallbuy from "./components/brand-baydeniz/bayfinallbuy";
import BayHome from "./components/brand-baydeniz/bayHome";
import BayMen from "./components/brand-baydeniz/bayMen";
import BayWomen from "./components/brand-baydeniz/bayWomen";
import TaherryHome from "./components/brand-taherry/taherryHome";
import TaherryMen from "./components/brand-taherry/taherryMen";
import TaherryWomen from "./components/brand-taherry/taherryWomen";
import TahiryyycartMen from "./components/brand-taherry/tahiryyycartMen";
import TahiryyycartWomen from "./components/brand-taherry/tahiryyycartWomen";
import Tahiryyyfinallbuy from "./components/brand-taherry/tahiryyyfinallbuy";
import GalarcartMen from "./components/brand-galar/galarcartMen";
import GalarcartWomen from "./components/brand-galar/galarcartWomen";
import Galarfinallbuy from "./components/brand-galar/galarfinallbuy";
import GalarHome from "./components/brand-galar/galarHome";
import GalarMen from "./components/brand-galar/galarMen";
import GalarWomen from "./components/brand-galar/galarWomen";
import RawzcartMen from "./components/brand-rawz/rawzcartMen";
import RawzcartWomen from "./components/brand-rawz/rawzcartWomen";
import Rawzfinallbuy from "./components/brand-rawz/rawzfinallbuy";
import RawzHome from "./components/brand-rawz/rawzHome";
import RawzMen from "./components/brand-rawz/rawzMen";
import RawzWomen from "./components/brand-rawz/rawzWomen";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BayFinallbutWomen from "./components/brand-baydeniz/bayFinallbutWomen";
import BussnisFinallbutWomen from "./components/brand-bussnis/bussnisFinallbutWomen";
import DelmanFinallbutWomen from "./components/brand-delman/delmanFinallbutWomen";
import GalarFinallbutWomen from "./components/brand-galar/galarFinallbutWomen";
import HrFinallbutWomen from "./components/brand-hr/HrFinallbutWomen";
import KFinallbutWomen from "./components/brand-kfashion/KFinallbutWomen";
import RawazFinallbutWomen from "./components/brand-rawz/rawazFinallbutWomen";
import SanvitoFinallbutWomen from "./components/brand-sanvito/sanvitoFinallbutWomen";
import ShvanFinallbutWomen from "./components/brand-shvanCenter/shvanFinallbutWomen";
import SoranFinallbutWomen from "./components/brand-soranClass/soranFinallbutWomen";
import TaheryyFinallbutWomen from "./components/brand-taherry/taheryyFinallbutWomen";
import TahirFinallbutWomen from "./components/brand-tahir/tahirFinallbutWomen";
// -------------------------------all brand world-----------------------------------
// -------------------------------all brand world-----------------------------------
// -------------------------------all brand world-----------------------------------
import Adidascartformen from "./components/---all-brand-world---/brand-adidas/adidascartformen";
import AdidascartforWomen from "./components/---all-brand-world---/brand-adidas/adidascartforWomen";
import AdidasFinallbutWomen from "./components/---all-brand-world---/brand-adidas/adidasFinallbutWomen";
import AdidasfinallBuyMen from "./components/---all-brand-world---/brand-adidas/adidasfinallBuyMen";
import AdidasHome from "./components/---all-brand-world---/brand-adidas/adidasHome";
import AdidasMen from "./components/---all-brand-world---/brand-adidas/adidasMen";
import AdidasWomen from "./components/---all-brand-world---/brand-adidas/adidasWomen";
import CHANELcartformen from "./components/---all-brand-world---/brand-CHANEL/CHANELcartformen";
import CHANELcartforWomen from "./components/---all-brand-world---/brand-CHANEL/CHANELcartforWomen";
import CHANELFinallbutWomen from "./components/---all-brand-world---/brand-CHANEL/CHANELFinallbutWomen";
import CHANELfinallBuyMen from "./components/---all-brand-world---/brand-CHANEL/CHANELfinallBuyMen";
import CHANELHome from "./components/---all-brand-world---/brand-CHANEL/CHANELHome";
import CHANELMen from "./components/---all-brand-world---/brand-CHANEL/CHANELMen";
import CHANELWomen from "./components/---all-brand-world---/brand-CHANEL/CHANELWomen";
import DIORcartformen from "./components/---all-brand-world---/brand-dior/DIORcartformen";
import DIORcartforWomen from "./components/---all-brand-world---/brand-dior/DIORcartforWomen";
import DIORFinallbutWomen from "./components/---all-brand-world---/brand-dior/DIORFinallbutWomen";
import DIORfinallBuyMen from "./components/---all-brand-world---/brand-dior/DIORfinallBuyMen";
import DIORHome from "./components/---all-brand-world---/brand-dior/DIORHome";
import DIORMen from "./components/---all-brand-world---/brand-dior/DIORMen";
import DIORWomen from "./components/---all-brand-world---/brand-dior/DIORWomen";
import EMPORIOARMANcartformen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANcartformen";
import EMPORIOARMANcartforWomen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANcartforWomen";
import EMPORIOARMANFinallbutWomen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANFinallbutWomen";
import EMPORIOARMANfinallBuyMen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANfinallBuyMen";
import EMPORIOARMANHome from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANHome";
import EMPORIOARMANMen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANMen";
import EMPORIOARMANWomen from "./components/---all-brand-world---/brand-EMPORIO ARMAN/EMPORIOARMANWomen";
import GUCCLcartformen from "./components/---all-brand-world---/brand-GUCCL/GUCCLcartformen";
import GUCCLcartforWomen from "./components/---all-brand-world---/brand-GUCCL/GUCCLcartforWomen";
import GUCCLFinallbutWomen from "./components/---all-brand-world---/brand-GUCCL/GUCCLFinallbutWomen";
import GUCCLfinallBuyMen from "./components/---all-brand-world---//brand-GUCCL/GUCCLfinallBuyMen";
import GUCCLHome from "./components/---all-brand-world---//brand-GUCCL/GUCCLHome";
import GUCCLMen from "./components/---all-brand-world---//brand-GUCCL/GUCCLMen";
import GUCCLWomen from "./components/---all-brand-world---//brand-GUCCL/GUCCLWomen";
import LACOSTEcartformen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEcartformen";
import LACOSTEcartforWomen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEcartforWomen";
import LACOSTEFinallbutWomen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEFinallbutWomen";
import LACOSTEfinallBuyMen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEfinallBuyMen";
import LACOSTEHome from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEHome";
import LACOSTEMen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEMen";
import LACOSTEWomen from "./components/---all-brand-world---/brand-LACOSTE/LACOSTEWomen";
import LOUISVUITTONcartformen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONcartformen";
import LOUISVUITTONcartforWomen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONcartforWomen";
import LOUISVUITTONFinallbutWomen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONFinallbutWomen";
import LOUISVUITTONfinallBuyMen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONfinallBuyMen";
import LOUISVUITTONHome from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONHome";
import LOUISVUITTONMen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONMen";
import LOUISVUITTONWomen from "./components/---all-brand-world---/brand-LOUIS VUITTON/LOUISVUITTONWomen";
import NIKEHome from "./components/---all-brand-world---/brand-NIKE/NIKEHome";
import NIKEMen from "./components/---all-brand-world---/brand-NIKE/NIKEMen";
import NIKEWomen from "./components/---all-brand-world---/brand-NIKE/NIKEWomen";
import NIKEcartformen from "./components/---all-brand-world---/brand-NIKE/NIKEcartformen";
import NIKEcartforWomen from "./components/---all-brand-world---/brand-NIKE/NIKEcartforWomen";
import NIKEFinallbutWomen from "./components/---all-brand-world---/brand-NIKE/NIKEFinallbutWomen";
import NIKEfinallBuyMen from "./components/---all-brand-world---/brand-NIKE/NIKEfinallBuyMen";
import POLOcartformen from "./components/---all-brand-world---/brand-POLO/POLOcartformen";
import POLOcartforWomen from "./components/---all-brand-world---/brand-POLO/POLOcartforWomen";
import POLOFinallbutWomen from "./components/---all-brand-world---/brand-POLO/POLOFinallbutWomen";
import POLOfinallBuyMen from "./components/---all-brand-world---/brand-POLO/POLOfinallBuyMen";
import POLOHome from "./components/---all-brand-world---/brand-POLO/POLOHome";
import POLOMen from "./components/---all-brand-world---/brand-POLO/POLOMen";
import POLOWomen from "./components/---all-brand-world---/brand-POLO/POLOWomen";
import PRADAcartformen from "./components/---all-brand-world---/brand-PRADA/PRADAcartformen";
import PRADAcartforWomen from "./components/---all-brand-world---/brand-PRADA/PRADAcartforWomen";
import PRADAFinallbutWomen from "./components/---all-brand-world---/brand-PRADA/PRADAFinallbutWomen";
import PRADAfinallBuyMen from "./components/---all-brand-world---/brand-PRADA/PRADAfinallBuyMen";
import PRADAHome from "./components/---all-brand-world---/brand-PRADA/PRADAHome";
import PRADAMen from "./components/---all-brand-world---/brand-PRADA/PRADAMen";
import PRADAWomen from "./components/---all-brand-world---/brand-PRADA/PRADAWomen";
import ZARAcartforWomen from "./components/---all-brand-world---/brand-ZARA/ZARAcartforWomen";
import ZARAHome from "./components/---all-brand-world---/brand-ZARA/ZARAHome";
import ZARAcartformen from "./components/---all-brand-world---/brand-ZARA/ZARAcartformen";
import ZARAFinallbutWomen from "./components/---all-brand-world---/brand-ZARA/ZARAFinallbutWomen";
import ZARAfinallBuyMen from "./components/---all-brand-world---/brand-ZARA/ZARAfinallBuyMen";
import ZARAMen from "./components/---all-brand-world---/brand-ZARA/ZARAMen";
import ZARAWomen from "./components/---all-brand-world---/brand-ZARA/ZARAWomen";
import VERSACEcartformen from "./components/---all-brand-world---/brand-versace/VERSACEcartformen";
import VERSACEcartforWomen from "./components/---all-brand-world---/brand-versace/VERSACEcartforWomen";
import VERSACEFinallbutWomen from "./components/---all-brand-world---/brand-versace/VERSACEFinallbutWomen";
import VERSACEfinallBuyMen from "./components/---all-brand-world---/brand-versace/VERSACEfinallBuyMen";
import VERSACEHome from "./components/---all-brand-world---/brand-versace/VERSACEHome";
import VERSACEMen from "./components/---all-brand-world---/brand-versace/VERSACEMen";
import VERSACEWomen from "./components/---all-brand-world---/brand-versace/VERSACEWomen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function AosManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <AosManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reklamCart" element={<ReklamCart />} />
          <Route path="/reklamCart2" element={<ReklamCart2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sighnUp" element={<SighnUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/CartOne" element={<CartOne />} />
          <Route path="/CartTwo" element={<CartTwo />} />
          <Route path="/CartThree" element={<CartThree />} />
          <Route path="/bussnisHome" element={<BussnisHome />} />
          <Route path="/bussnisMen" element={<BussnisMen />} />
          <Route path="/BussnisWomen" element={<BussnisWomen />} />
          <Route path="/cartAllbrand" element={<CartAllbrand />} />
          <Route path="/cartforWomen" element={<CartforWomen />} />
          <Route
            path="/FinallPartBuyClothing"
            element={<FinallPartBuyClothing />}
          />
          <Route path="/sanvitoHome" element={<SanvitoHome />} />
          <Route path="/sanvitoallCart" element={<SanvitoallCart />} />
          <Route path="/sanvitofinallPart" element={<SanvitofinallPart />} />
          <Route path="/sanvitoMen" element={<SanvitoMen />} />
          <Route path="/sanvitoWomen" element={<SanvitoWomen />} />
          <Route
            path="/sanvitocartforWomen"
            element={<SanvitocartforWomen />}
          />
          <Route path="/soranclasscart" element={<Soranclasscart />} />
          <Route
            path="/soranclassfinallpart"
            element={<Soranclassfinallpart />}
          />
          <Route path="/soranHome" element={<SoranHome />} />
          <Route path="/soranMen" element={<SoranMen />} />
          <Route path="/soranWomen" element={<SoranWomen />} />
          <Route path="/sorancartforWomen" element={<SorancartforWomen />} />
          <Route path="/tahircart" element={<Tahircart />} />
          <Route path="/tahirfinallpart" element={<Tahirfinallpart />} />
          <Route path="/tahirHome" element={<TahirHome />} />
          <Route path="/tahirWomen" element={<TahirWomen />} />
          <Route path="/tahirMen" element={<TahirMen />} />
          <Route path="/tahircartforWomen" element={<TahircartforWomen />} />
          <Route path="/shvancartformMen" element={<ShvancartformMen />} />
          <Route path="/shvancartforWomen" element={<ShvancartforWomen />} />
          <Route path="/shvanfinallpartbuy" element={<Shvanfinallpartbuy />} />
          <Route path="/shvanHome" element={<ShvanHome />} />
          <Route path="/shvanWomen" element={<ShvanWomen />} />
          <Route path="/shvanMen" element={<ShvanMen />} />
          <Route path="/HRCartformen" element={<HRCartformen />} />
          <Route path="/HRCartforwomen" element={<HRCartforwomen />} />
          <Route path="/HRfinallpartbuy" element={<HRfinallpartbuy />} />
          <Route path="/hrHome" element={<HrHome />} />
          <Route path="/hrMen" element={<HrMen />} />
          <Route path="/hrWomen" element={<HrWomen />} />
          <Route path="/delmancartMen" element={<DelmancartMen />} />
          <Route path="/delmancartWomen" element={<DelmancartWomen />} />
          <Route path="/delmanfinallbuy" element={<Delmanfinallbuy />} />
          <Route path="/delmanHome" element={<DelmanHome />} />
          <Route path="/delmanMen" element={<DelmanMen />} />
          <Route path="/delmanWomen" element={<DelmanWomen />} />
          <Route path="/KcartMen" element={<KcartMen />} />
          <Route path="/KcartWomen" element={<KcartWomen />} />
          <Route path="/Kfinallpartbuy" element={<Kfinallpartbuy />} />
          <Route path="/kHome" element={<KHome />} />
          <Route path="/kMen" element={<KMen />} />
          <Route path="/kWomen" element={<KWomen />} />
          <Route path="/baycartMen" element={<BaycartMen />} />
          <Route path="/baycartWomen" element={<BaycartWomen />} />
          <Route path="/bayfinallbuy" element={<Bayfinallbuy />} />
          <Route path="/bayHome" element={<BayHome />} />
          <Route path="/bayMen" element={<BayMen />} />
          <Route path="/bayWomen" element={<BayWomen />} />
          <Route path="/taherryHome" element={<TaherryHome />} />
          <Route path="/taherryMen" element={<TaherryMen />} />
          <Route path="/taherryWomen" element={<TaherryWomen />} />
          <Route path="/tahiryyycartMen" element={<TahiryyycartMen />} />
          <Route path="/tahiryyycartWomen" element={<TahiryyycartWomen />} />
          <Route path="/tahiryyyfinallbuy" element={<Tahiryyyfinallbuy />} />
          <Route path="/galarcartMen" element={<GalarcartMen />} />
          <Route path="/galarcartWomen" element={<GalarcartWomen />} />
          <Route path="/galarfinallbuy" element={<Galarfinallbuy />} />
          <Route path="/galarHome" element={<GalarHome />} />
          <Route path="/galarWomen" element={<GalarWomen />} />
          <Route path="/galarMen" element={<GalarMen />} />
          <Route path="/rawzcartMen" element={<RawzcartMen />} />
          <Route path="/rawzcartWomen" element={<RawzcartWomen />} />
          <Route path="/rawzfinallbuy" element={<Rawzfinallbuy />} />
          <Route path="/rawzHome" element={<RawzHome />} />
          <Route path="/rawzMen" element={<RawzMen />} />
          <Route path="/rawzWomen" element={<RawzWomen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/bayFinallbutWomen" element={<BayFinallbutWomen />} />
          <Route
            path="/bussnisFinallbutWomen"
            element={<BussnisFinallbutWomen />}
          />
          <Route
            path="/delmanFinallbutWomen"
            element={<DelmanFinallbutWomen />}
          />
          <Route
            path="/galarFinallbutWomen"
            element={<GalarFinallbutWomen />}
          />
          <Route path="/hrFinallbutWomen" element={<HrFinallbutWomen />} />
          <Route path="/KFinallbutWomen" element={<KFinallbutWomen />} />
          <Route
            path="/RawazFinallbutWomen"
            element={<RawazFinallbutWomen />}
          />
          <Route
            path="/SanvitoFinallbutWomen"
            element={<SanvitoFinallbutWomen />}
          />
          <Route
            path="/shvanFinallbutWomen"
            element={<ShvanFinallbutWomen />}
          />
          <Route
            path="/soranFinallbutWomen"
            element={<SoranFinallbutWomen />}
          />
          <Route
            path="/taheryyFinallbutWomen"
            element={<TaheryyFinallbutWomen />}
          />
          <Route
            path="/tahirFinallbutWomen"
            element={<TahirFinallbutWomen />}
          />
          {/* -----------all brand world--------- */}
          <Route path="/adidascartformen" element={<Adidascartformen />} />
          <Route path="/adidascartforWomen" element={<AdidascartforWomen />} />
          <Route
            path="/adidasFinallbutWomen"
            element={<AdidasFinallbutWomen />}
          />
          <Route path="/adidasfinallBuyMen" element={<AdidasfinallBuyMen />} />
          <Route path="/adidasHome" element={<AdidasHome />} />
          <Route path="/adidasMen" element={<AdidasMen />} />
          <Route path="/adidasWomen" element={<AdidasWomen />} />
          <Route path="/CHANELcartformen" element={<CHANELcartformen />} />
          <Route path="/CHANELcartforWomen" element={<CHANELcartforWomen />} />
          <Route
            path="/CHANELFinallbutWomen"
            element={<CHANELFinallbutWomen />}
          />
          <Route path="/CHANELfinallBuyMen" element={<CHANELfinallBuyMen />} />
          <Route path="/CHANELHome" element={<CHANELHome />} />
          <Route path="/CHANELMen" element={<CHANELMen />} />
          <Route path="/CHANELWomen" element={<CHANELWomen />} />
          <Route path="/DIORcartformen" element={<DIORcartformen />} />
          <Route path="/DIORcartforWomen" element={<DIORcartforWomen />} />
          <Route path="/DIORFinallbutWomen" element={<DIORFinallbutWomen />} />
          <Route path="/DIORfinallBuyMen" element={<DIORfinallBuyMen />} />
          <Route path="/DIORHome" element={<DIORHome />} />
          <Route path="DIORMen" element={<DIORMen />} />
          <Route path="DIORWomen" element={<DIORWomen />} />
          <Route
            path="EMPORIOARMANcartformen"
            element={<EMPORIOARMANcartformen />}
          />
          <Route
            path="EMPORIOARMANcartforWomen"
            element={<EMPORIOARMANcartforWomen />}
          />
          <Route
            path="EMPORIOARMANFinallbutWomen"
            element={<EMPORIOARMANFinallbutWomen />}
          />
          <Route
            path="EMPORIOARMANfinallBuyMen"
            element={<EMPORIOARMANfinallBuyMen />}
          />
          <Route path="EMPORIOARMANHome" element={<EMPORIOARMANHome />} />
          <Route path="EMPORIOARMANMen" element={<EMPORIOARMANMen />} />
          <Route path="EMPORIOARMANWomen" element={<EMPORIOARMANWomen />} />
          <Route path="GUCCLcartformen" element={<GUCCLcartformen />} />
          <Route path="GUCCLcartforWomen" element={<GUCCLcartforWomen />} />
          <Route path="GUCCLFinallbutWomen" element={<GUCCLFinallbutWomen />} />
          <Route path="GUCCLfinallBuyMen" element={<GUCCLfinallBuyMen />} />
          <Route path="GUCCLHome" element={<GUCCLHome />} />
          <Route path="GUCCLMen" element={<GUCCLMen />} />
          <Route path="GUCCLWomen" element={<GUCCLWomen />} />
          <Route path="LACOSTEcartformen" element={<LACOSTEcartformen />} />
          <Route path="LACOSTEcartforWomen" element={<LACOSTEcartforWomen />} />
          <Route
            path="LACOSTEFinallbutWomen"
            element={<LACOSTEFinallbutWomen />}
          />
          <Route path="LACOSTEfinallBuyMen" element={<LACOSTEfinallBuyMen />} />
          <Route path="LACOSTEHome" element={<LACOSTEHome />} />
          <Route path="LACOSTEMen" element={<LACOSTEMen />} />
          <Route path="LACOSTEWomen" element={<LACOSTEWomen />} />
          <Route
            path="LOUISVUITTONcartformen"
            element={<LOUISVUITTONcartformen />}
          />
          <Route
            path="LOUISVUITTONcartforWomen"
            element={<LOUISVUITTONcartforWomen />}
          />
          <Route
            path="LOUISVUITTONFinallbutWomen"
            element={<LOUISVUITTONFinallbutWomen />}
          />
          <Route
            path="LOUISVUITTONfinallBuyMen"
            element={<LOUISVUITTONfinallBuyMen />}
          />
          <Route path="LOUISVUITTONHome" element={<LOUISVUITTONHome />} />
          <Route path="LOUISVUITTONMen" element={<LOUISVUITTONMen />} />
          <Route path="LOUISVUITTONWomen" element={<LOUISVUITTONWomen />} />
          <Route path="NIKEHome" element={<NIKEHome />} />
          <Route path="NIKEMen" element={<NIKEMen />} />
          <Route path="NIKEWomen" element={<NIKEWomen />} />
          <Route path="NIKEcartformen" element={<NIKEcartformen />} />
          <Route path="NIKEcartforWomen" element={<NIKEcartforWomen />} />
          <Route path="NIKEFinallbutWomen" element={<NIKEFinallbutWomen />} />
          <Route path="NIKEfinallBuyMen" element={<NIKEfinallBuyMen />} />
          <Route path="POLOcartformen" element={<POLOcartformen />} />
          <Route path="POLOcartforWomen" element={<POLOcartforWomen />} />
          <Route path="POLOFinallbutWomen" element={<POLOFinallbutWomen />} />
          <Route path="POLOfinallBuyMen" element={<POLOfinallBuyMen />} />
          <Route path="POLOHome" element={<POLOHome />} />
          <Route path="POLOMen" element={<POLOMen />} />
          <Route path="POLOWomen" element={<POLOWomen />} />
          <Route path="PRADAcartformen" element={<PRADAcartformen />} />
          <Route path="PRADAcartforWomen" element={<PRADAcartforWomen />} />
          <Route path="PRADAFinallbutWomen" element={<PRADAFinallbutWomen />} />
          <Route path="PRADAfinallBuyMen" element={<PRADAfinallBuyMen />} />
          <Route path="PRADAHome" element={<PRADAHome />} />
          <Route path="PRADAMen" element={<PRADAMen />} />
          <Route path="PRADAWomen" element={<PRADAWomen />} />
          <Route path="ZARAcartforWomen" element={<ZARAcartforWomen />} />
          <Route path="ZARAHome" element={<ZARAHome />} />
          <Route path="ZARAcartformen" element={<ZARAcartformen />} />
          <Route path="ZARAFinallbutWomen" element={<ZARAFinallbutWomen />} />
          <Route path="ZARAfinallBuyMen" element={<ZARAfinallBuyMen />} />
          <Route path="ZARAMen" element={<ZARAMen />} />
          <Route path="ZARAWomen" element={<ZARAWomen />} />
          <Route path="VERSACEcartformen" element={<VERSACEcartformen />} />
          <Route path="VERSACEcartforWomen" element={<VERSACEcartforWomen />} />
          <Route
            path="VERSACEFinallbutWomen"
            element={<VERSACEFinallbutWomen />}
          />
          <Route path="VERSACEfinallBuyMen" element={<VERSACEfinallBuyMen />} />
          <Route path="VERSACEHome" element={<VERSACEHome />} />
          <Route path="VERSACEMen" element={<VERSACEMen />} />
          <Route path="VERSACEWomen" element={<VERSACEWomen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
