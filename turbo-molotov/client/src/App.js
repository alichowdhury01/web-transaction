import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {  Navbar2, Home, Magasiner, SignIn, SignUp, Connexion, Membre, ContactUs} from "./scenes/index";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar2 />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Connexion />}/>
          <Route path="/membre" element={<Membre />}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
