// App.jsx
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import data from "./assets/data/data.json";
import resinas from "./assets/data/resinas.json";
import data_productos from "./assets/data/productos.json";
import Suministros from "./views/Suministros";
import FtProductos from "./views/FtProductos";
import Resinas from "./views/Resinas";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suministros" element={<Suministros data={data} />} />
        <Route path="/ft-productos" element={<FtProductos data_productos={data_productos} />} />
          <Route path="/resinas" element={<Resinas  data={resinas} />} />
      
      </Routes>
    </Router>
  );
}

export default App;
