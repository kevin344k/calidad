import { useState } from "react";
import CardFT from "../components/CardFT";
import arrow_left from "/arrow-left.svg";
import { useNavigate } from "react-router-dom";

function FtProductos({ data_productos }) {
    const categorias = Object.keys(data_productos[0]); // ["eps", "expandido", "inyeccion"]
  const [openCategory, setOpenCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [textInput, setTextInput] = useState("");
  const [dataFound, setDataFound] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
const [isOpen,setIsOpen]=useState(false)
  // 🔹 Función que aplana los arrays de procesos
  const flattenData = (data) => {
    if (!Array.isArray(data) || data.length === 0) return [];
    const categorias = data[0]; // tu estructura tiene 1 objeto con varias categorías
    return Object.keys(categorias).flatMap((key) =>
      categorias[key].map((item) => ({
        ...item,
        PROCESO: key, // aseguro que guarde el nombre del proceso
      }))
    );
  };

  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    const filteredValue = rawValue.trim().toLowerCase();
    setTextInput(rawValue);

    if (!filteredValue) {
      setSuggestions([]);
      setDataFound(null);
      return;
    }

    // 🔹 Unificar todos los productos de todas las categorías
    const allProducts = flattenData(data_productos);

    // 🔹 Buscar coincidencias por código o descripción (case insensitive)
    const matches = allProducts.filter((item) =>
      item.Producto.toLowerCase().includes(filteredValue)
    );
    console.log(matches);

    setSuggestions(matches.slice(0, 8)); // mostrar máx 8 sugerencias
  };

  const handleSuggestionClick = (item) => {
    setTextInput(item.Producto);
    setDataFound(item);
    console.log(item);

    setSuggestions([]);
  };
    const toggleCategory = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const toggleShowAll = (cat) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };



  return (
    <div className=" min-h-screen flex flex-col">
      {/* Barra de búsqueda */}
      <nav className="relative flex flex-row justify-center gap-4 bg-green-500 p-4 px-2">
        <div
          onClick={() => navigate("/")}
          className="bg-green-500 [box-shadow:0_0_10px_4px_rgba(0,0,0,0.1)] rounded-md"
        >
          <img className="w-10" src={arrow_left} alt="arrow-left" />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={textInput}
            onChange={handleInputChange}
            placeholder="Ingrese código o nombre"
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
                <span className="font-bold">{item.Ficha} </span>-{" "}
                {item.Producto}
              </li>
            ))}
          </ul>
        )}
      </div>

      <main className="flex items-center justify-center bg-neutral-50">
      


    <div className="p-4 max-w-2xl  w-full mx-auto">
      {categorias.map((cat) => {
        const productos = data_productos[0][cat] || [];
        const showAll = expandedCategories[cat] || false;
        const visibleProductos = showAll ? productos : productos.slice(0, 10);

        return (
          <div key={cat} className="mb-4 border rounded-lg shadow">
            {/* Encabezado del acordeón */}
            <button
              onClick={() => toggleCategory(cat)}
              className="w-full flex justify-between items-center px-4 py-3 bg-green-500 text-white rounded-t-lg"
            >
              <span className="capitalize font-semibold">{cat}</span>
              <span>{openCategory === cat ? "▲" : "▼"}</span>
            </button>

            {/* Contenido */}
            {openCategory === cat && (
              <div className="p-4 bg-white">
                <ul className="space-y-2">
                  {visibleProductos.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-gray-50 border rounded-md flex gap-2 "
                      onClick={()=>setDataFound(item)
                      }
                    >
                      <span className="font-bold w-20 text-sm">{item.Ficha}</span>
                      <span className="text-sm truncate">{item.Producto}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón Ver todo / Ver menos */}
                {productos.length > 10 && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => toggleShowAll(cat)}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      {showAll ? "Ver menos" : "Ver todo"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>






      </main>
         {/* Modal */}   
          {/* Resultado */}
      {dataFound &&  (
       
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <CardFT data={dataFound}  onClose={() => setDataFound(null)} />
      </div>
      
      )}
    </div>
  );
}

export default FtProductos;
