import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {  Navbar2, Home, Magasiner, SignIn, SignUp, Connexion, Membre, ContactUs, Admin} from "./scenes/index";

let routePath;
let elementPath;
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
//à determiner le où et comment faire pour que le path soit dynamique 
if (localStorage.getItem('role') === "M") { 
  routePath = "/"+localStorage.getItem('session'); 
  elementPath = <Membre />;
}
else if (localStorage.getItem('role') === "A") { 
  routePath = "/"+localStorage.getItem('session');
  elementPath = <Admin />;
}
function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar2 />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Connexion />}/>
          <Route path="/membre" element={<Membre/>}/>
          <Route path="/contact" element={<ContactUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
