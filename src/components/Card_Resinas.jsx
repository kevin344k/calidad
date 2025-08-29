import React from "react";

export default function Card_Resinas({ data }) {
  console.log(data);

  if (data && Object.keys(data).length > 0) {
    return (
      <div className="w-fit min-w-[300px] py-8 max-w-lg h-full lg:min-w-96 text-center md:text-sm text-sm mx-auto p-3  rounded-2xl relative border border-neutral-300 shadow-xl">
        {/* Código y descripción */}
        <div className="flex flex-row gap-2">
          <p className="font-bold">Código:</p>
          <p>{data.Cod_Interno}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="font-bold">Nombre:</p>
          <p>
            {data.Tipo} {data.Nombre}
          </p>
        </div>

        {/* Medidas */}
        <div className="text-center">
          <p className="text-neutral-400 text-left py-1 mb-2 border-b-2">Detalles</p>
          <div className="grid grid-cols-2 gap-2 mb-7">
         
            <div className={` gap-2`}>
              <p className="font-bold">Cod. Categoria</p>
              <p>{data.Cod_Categ}</p>
            </div>
             <div className={` gap-2`}>
              <p className="font-bold">Nombre Categoria</p>
              <p>{data.Nombre_de_Categoria}</p>
            </div>
             <div className=" gap-2 bg-neutral-200 rounded-md py-2">
              <p className="font-bold">Calificacion</p>
              <p>{data.Calificacion}</p>
            </div>
               <div className=" gap-2  rounded-md py-2">
              <p className="font-bold">MFR (g/10min)</p>
              <p>{data.mfr}</p>
            </div>
             <div className=" gap-2  rounded-md py-2">
              <p className="font-bold">test MFR</p>
              <p>{data.Test_MFR}</p>
            </div>
          
          </div>
        </div>
        <div className="py-4">
           <p className=" text-left py-1 mb-2 border-b-2 text-neutral-400">Observacion</p>
           <p>{data.Observacion}</p>
        </div>

        {/* Etiquetas */}
        <div className="border border-red-400 bg-red-400 w-full px-5 py-2 absolute bottom-0 right-0 rounded-br-2xl rounded-bl-2xl">
          <p className="text-white font-semibold">{data.Familia}</p>
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
