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
    return (
      <div className="w-fit min-w-[300px] py-8 max-w-lg h-full lg:min-w-96 text-center md:text-sm text-sm mx-auto p-3  rounded-2xl relative border border-neutral-300 shadow-xl">
        {/* Código y descripción */}
        <div className="flex flex-row gap-2">
          <p className="font-bold">Código:</p>
          <p>{data.CODIGO}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="font-bold">Descripción:</p>
          <p>
            {data.Tipo} {data.Descripción}
          </p>
        </div>

        {/* Medidas */}
        <div className="text-center">
          <p className="font-bold py-1 mb-2 border-b-2">Medidas</p>
          <div className="grid grid-cols-2 gap-2 mb-7">
            <Field label="Largo(mm)" value={data.Largo} />
            <Field label="Ancho(mm)" value={data.Ancho} />
            <Field label="Fuelle(mm)" value={data.Fuelle} />
            <Field label="Espesor(µ)" value={data.Espesor} />
            <Field
              label={data.Tipo === "Cart." ? "Test-ect" : "M.P"}
              value={data.MP}
            />
            <Field label="Imp." value={data.Imp} />
          </div>

          {/* Códigos de barras */}
          <p className="font-bold py-1 mb-2 border-b-2">Código de barras</p>
          <div className="grid grid-cols-2 mb-12">
            <Field label="EAN-13" value={data.EAN_13} vertical />
            <Field label="EAN-14" value={data.EAN_14} vertical />
          </div>
        </div>

        {/* Etiquetas */}
        <div className="border border-red-400 bg-red-400 w-full px-5 py-2 absolute bottom-0 right-0 rounded-br-2xl rounded-bl-2xl">
          <p className="text-white font-semibold">{data.Prov}</p>
        </div>
        <div className="bg-red-400 w-fit px-5 py-2 absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
          <p className="text-white font-semibold">{data.Tipo}</p>
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
