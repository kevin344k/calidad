import React from "react";

export default function Card({ data }) {
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
      <div className=" max-w-[310px]  h-full md:max-w-[420px] lg:min-w-96 text-center md:text-sm text-sm mx-auto overflow-hidden  rounded-2xl relative border border-neutral-300 shadow-xl">
        <div className="w-full bg-[radial-gradient(circle,_#2D5847,_#499371)] p-5">
          <img className="mx-auto" src={data.URL} alt="" />
        </div>

        <div className="p-3 py-8">
          {/* Código y descripción */}
          <div className="flex flex-row gap-2">
            <p className="font-bold">Código:</p>
            <p>{data.ITEM}</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-bold">Descripción:</p>
            <p>{data.DESCRIPCION_DEL_PRODUCTO}</p>
          </div>

          {/* Medidas */}
          <div className="text-center">
            <p className="font-bold py-1 mb-2 border-b-2">Medidas</p>
            <div className="grid grid-cols-2 gap-2 mb-7">
              <Field
                label="Peso(g)"
                value={
                  formatNumber(data?.PESO_STANDARD_g) !== null &&
                  formatNumber(data?.TOLERANCIA_PROMEDIO_PESO_g) !== null
                    ? `${formatNumber(data.PESO_STANDARD_g)} ± ${formatNumber(
                        data.TOLERANCIA_PROMEDIO_PESO_g
                      )}`
                    : ""
                }
              />

              <Field
                label="Ø externo(mm)"
                value={
                  formatNumber(data?.DIAMETRO_EXTERNO_mm) !== null &&
                  formatNumber(data?.TOLERANCIA_PROMEDIO_D_EXT_mm) !== null
                    ? `${formatNumber(
                        data.DIAMETRO_EXTERNO_mm
                      )} ± ${formatNumber(data.TOLERANCIA_PROMEDIO_D_EXT_mm)}`
                    : "n/a"
                }
              />
              <Field
                label="Ø interno(mm)"
                value={
                  formatNumber(data?.DIAMETRO_INTERNO_mm) !== null &&
                  formatNumber(data?.TOLERANCIA_PROMEDIO_D_INT_mm) !== null
                    ? `${formatNumber(
                        data.DIAMETRO_INTERNO_mm
                      )} ± ${formatNumber(data.TOLERANCIA_PROMEDIO_D_INT_mm)}`
                    : "n/a"
                }
              />
              <Field
                label="Altura(mm)"
                value={
                  formatNumber(data?.ALTURA_mm) !== null &&
                  formatNumber(data?.TOLERANCIA_PROMEDIO_ALTURA_mm) !== null
                    ? `${formatNumber(data.ALTURA_mm)} ± ${formatNumber(
                        data.TOLERANCIA_PROMEDIO_ALTURA_mm
                      )}`
                    : "n/a"
                }
              />
            </div>
          </div>

          {/* Etiquetas */}
          <div className="border border-red-400 bg-red-400 w-full px-5 py-2 absolute bottom-0 right-0 rounded-br-2xl rounded-bl-2xl">
            <p className="text-white font-semibold">{data.PROCESO}</p>
          </div>
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
