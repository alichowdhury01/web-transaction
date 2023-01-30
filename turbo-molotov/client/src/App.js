import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Navbar2, Home, Magasiner, SignIn, SignUp, Connexion} from "./scenes/index";
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
          <Route path="/magasiner" element={<Magasiner />}/>
          <Route path="/signin" element={<Connexion />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
