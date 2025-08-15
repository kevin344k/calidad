import { useState } from "react";
import data from "../data/data.json";
import Card from "./components/Card";


function App() {
  const [textInput, setTextInput] = useState("");
  const [dataFound, setDataFound] = useState(null);
   const [suggestions, setSuggestions] = useState([]);



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
    const matches = data.filter(
      (item) =>
        item.CODIGO.toUpperCase().includes(filteredValue) ||
        item.Descripción.toUpperCase().includes(filteredValue)
    );

    setSuggestions(matches.slice(0, 8)); // mostrar máx 5
  };

  const handleSuggestionClick = (item) => {
    setTextInput(item.CODIGO);
    setDataFound(item);
    setSuggestions([]);
  };







  return (
    <div className=" min-h-screen flex flex-col">
      {/* Barra de búsqueda */}
      <nav className="relative flex flex-row justify-center gap-4 bg-indigo-500 p-4 px-2">
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
  <div className="absolute top-[80px] z-30">
          {suggestions.length > 0 && (
          <ul className=" w-[95%] mx-auto bg-white shadow-md rounded-lg overflow-hidden z-50 divide-y">
            {suggestions.map((item, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(item)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                <span className="font-bold">{item.CODIGO}</span><span className="italic pl-4">{item.Tipo}</span> - {item.Descripción}
              </li>
            ))}
          </ul>
        )}
  </div>

    <main className="flex  flex-1 items-center justify-center">
        {/* Resultado */}
      <Card data={dataFound}  />
    </main>
    </div>
  );
}

export default App;
