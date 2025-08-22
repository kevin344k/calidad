import React from "react";

export default function Card({ data }) {
  console.log(data);
  
  function Field({ label, value, vertical }) {
    return (
      <div className={`flex ${vertical ? "flex-col" : "flex-row"} gap-2`}>
        <p className="font-bold">{label}:</p>
        <p>{value ?? "-"}</p>
      </div>
    );
  }

  if (data && Object.keys(data).length > 0) {
    const formatNumber = (value, decimals = 1) => {
      const num = parseFloat(value);
      return isNaN(num) ? null : num.toFixed(decimals);
    };

    return (
      <div className=" max-w-[310px]  h-full md:max-w-[420px] lg:min-w-96 text-center md:text-sm text-sm mx-auto overflow-hidden  rounded-2xl relative border border-neutral-200 shadow-xl">
        <div className="w-full bg-[radial-gradient(circle,_#2D5847,_#499371)] p-5">
          {/* Código y descripción */}
          <div className="flex flex-row gap-2">
            <p className="text-white">{data.Ficha}</p>
          </div>
          <div className="flex flex-row gap-2 py-4">
            <p className="font-bold text-white">{data.Producto}</p>
          </div>
        </div>

        <div className="p-3 py-4 flex items-center justify-center flex-col">
          {/* Medidas */}
          <div className="text-center px-4 w-full min-w-[300px]">
            <p className="font-bold py-1 mb-2 ">Medidas</p>
            <ul className="divide-y text-left">
        {Object.entries(data).slice(2,-1).map(([key, value]) => (
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

  return (
    <div className="flex max-w-lg min-w-[320px] lg:min-w-90 text-center mx-auto p-5 h-full bg-white rounded-2xl relative  shadow-md">
      {data === null
        ? "Bienvenido al apartdo de suministros"
        : Object.keys(data).length === 0
        ? "No existe"
        : null}
    </div>
  );
}
