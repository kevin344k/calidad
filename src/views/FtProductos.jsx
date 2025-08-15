import { useState } from "react";

import CardFT from "../components/CardFT";
import arrow_left from "/arrow-left.svg"
import { useNavigate } from "react-router-dom";
function FtProductos({data_productos}) {
  const [textInput, setTextInput] = useState("");
  const [dataFound, setDataFound] = useState(null);
   const [suggestions, setSuggestions] = useState([]);
 const navigate = useNavigate();



 const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const filteredValue = rawValue.toUpperCase();
    setTextInput(filteredValue);

    if (!filteredValue.trim()) {
      setSuggestions([]);
      setDataFound({});
      return;
    }

    // Filtrar coincidencias por código o descripción
    const matches = data_productos.filter(
      (item) =>
        item.ITEM.toUpperCase().includes(filteredValue) ||
        item.DESCRIPCION_DEL_PRODUCTO.toUpperCase().includes(filteredValue)
    );

    setSuggestions(matches.slice(0, 8)); // mostrar máx 5
  };

  const handleSuggestionClick = (item) => {
    setTextInput(item.ITEM);
    setDataFound(item);
    setSuggestions([]);
  };

  return (
    <div className=" min-h-screen flex flex-col">
      {/* Barra de búsqueda */}
      <nav className="relative flex flex-row justify-center gap-4 bg-green-500 p-4 px-2">
        <div onClick={() => navigate("/")} className="bg-green-500 [box-shadow:0_0_10px_4px_rgba(0,0,0,0.1)] rounded-md">
            <img className="w-10" src={arrow_left} alt="arrow-left" />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            placeholder="Ingrese código"
            className=" rounded-full px-4 py-2 shadow-md focus:outline-none focus:ring focus:ring-sky-300"
          />

        </div>
      </nav>
            {/* Lista de sugerencias */}
  <div className="absolute top-[80px] z-30 w-full">
          {suggestions.length > 0 && (
          <ul className=" w-[95%] md:max-w-[450px] mx-auto bg-white shadow-md rounded-lg overflow-hidden z-50 divide-y">
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(item)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                <span className="font-bold">{item.ITEM}</span><span className=" lowercase italic pl-4">{item.PROCESO}</span> - {item.DESCRIPCION_DEL_PRODUCTO}
              </li>
            ))}
          </ul>
        )}
  </div>

    <main className="flex  flex-1 items-center justify-center bg-neutral-50">
        {/* Resultado */}
      <CardFT data={dataFound}  />
    </main>
    </div>
  );
}

export default FtProductos;
