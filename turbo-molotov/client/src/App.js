import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar2 } from "./components/Navbar2";
import Liste from "./components/Liste";
import Ajouter from "./components/Ajouter";
import Chercher from "./components/Chercher";
import Supprimer from "./components/Supprimer";





function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Liste />}/>
          <Route path="/ajouter" element={<Ajouter />}/>
          <Route path="/chercher" element={<Chercher />}/>
          <Route path="/supprimer" element={<Supprimer />}/>
        </Routes>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
