import React from "react";

export default function Card({ data,onClose }) {
  console.log(data);
  if (!data) return null;
  if (data && Object.keys(data).length > 0) {
    const formatNumber = (value, decimals = 1) => {
      const num = parseFloat(value);
      return isNaN(num) ? null : num.toFixed(decimals);
    };

    return (
      <div className=" max-w-[310px]  h-fit bg-white  md:max-w-[420px] lg:min-w-96 text-center md:text-sm text-sm mx-auto  rounded-2xl relative  shadow-xl">
        <button
          onClick={onClose}
          className="absolute -top-5 -right-2 w-10 h-10 flex items-center justify-center 
             bg-red-400 text-white rounded-full shadow-md hover:bg-red-500 text-3xl
             transition-transform transform hover:scale-110"
        >
          ×
        </button>

        <div className="w-full bg-[radial-gradient(circle,_#2D5847,_#499371)] p-5 rounded-tl-2xl rounded-tr-2xl">
          {/* Código y descripción */}
          <div className="flex flex-row gap-2">
            <p className="text-white">{data.Ficha}</p>
          </div>
          <div className="flex flex-row gap-2 py-4">
            <p className="font-bold text-2xl text-white">{data.Producto}</p>
          </div>
        </div>

        <div className="p-3 py-4 flex items-center justify-center flex-col">
          {/* Medidas */}
          <div className="text-center px-4 w-full min-w-[250px]">
            <p className="font-bold py-1 mb-2 ">Medidas</p>
            <ul className="divide-y text-left">
              {Object.entries(data)
                .slice(2, -1)
                .map(([key, value]) => (
                  <li key={key} className="py-2">
                    <span className="font-semibold">{key}: </span>
                    <span>{value}</span>
                  </li>
                ))}
            </ul>
          </div>
          {/* Imagen */}
          <div className=" ">
            <div className="h-40 w-34 p-1 bg-white shadow-md">
              Imagen de producto
            </div>
          </div>
        </div>
        {/* Etiquetas */}
        <div className="border border-red-400 bg-red-400 w-full px-5 py-2  bottom-0 right-0 rounded-br-2xl rounded-bl-2xl">
          <p className="text-white font-semibold">{data.PROCESO}</p>
        </div>
      </div>
    );
  }


}
