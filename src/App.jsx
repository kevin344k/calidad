import { useState } from "react";
import data from  "../data/data"





function App() {
  const [textInput, setTextInput] = useState("");
  const [dataFindShow, setDataFindShow] = useState({});
  const [itemExist, setItemExist] = useState(true);


console.log(data);



  function findItem(codeIten) {
    return codeIten.CODIGO === textInput;
  }

  function handlerInput(e) {
    setTextInput(e.target.value);

    if (textInput.length == 0) {
      setItemExist(true);
    }
  }

  const handlerButSearch = () => {
    if (textInput.length > 0) {
      const result = data.find((data) => findItem(data));

      if (result != undefined) {
        setDataFindShow(result);
      } else {
        setDataFindShow({});
        setItemExist(false);
      }
    }
  };
  const BodyQuery = ({ data }) => {
    console.log(data);

    if (data != undefined && Object.keys(data).length > 0) {
      return (
        <div className=" max-w-lg min-w-96 text-center mx-auto p-5 mt-7 rounded-2xl relative bg-white shadow-xl ">
          <div className="flex flex-row gap-2 bg-white">
            <p className="font-bold">Codigo:</p>
            <p>{data.CODIGO}</p>
          </div>
          <div className="flex flex-row gap-2">
            {" "}
            <p className="font-bold">Descripción:</p>
            <p>
              {data.Tipo} {data.Descripción}
            </p>
          </div>
          <div className="text-center ">
            <p className="font-bold py-1 mb-2 border-b-2">Medidas</p>
            {/*MEDIDAS */}
            <div className="grid grid-cols-2 gap-2 mb-7 ">
              <div className="flex flex-row gap-2">
                <p className="font-bold">Largo(mm):</p>
                <p>{data.Largo}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bold">Ancho(mm):</p>
                <p>{data.Ancho}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bold">Fuelle(mm):</p>
                <p>{data.Fuelle}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="font-bold">Espesor(µ):</p>
                <p>{data.Espesor}</p>
              </div>
              {/*Test o Materia Prima*/}
              <div className="flex flex-row gap-2">
                <p className="font-bold">
                  {data.Tipo == "Cart." ? "Test-ect:" : "M.P:"}
                </p>
                <p>{data.MP}</p>
              </div>
              {/* Impresión */}
              <div className="flex flex-row gap-2">
                <p className="font-bold">Imp.:</p>
                <p>{data.Imp}</p>
              </div>
            </div>
            <p className="font-bold py-1 mb-2 border-b-2 ">Codigo de barras</p>
            <div className="grid grid-cols-2 mb-12">
              {/*Codigo de barras*/}
              <div className="flex  flex-col gap-2">
                <p className="font-bold">EAN-13:</p>
                <p>{data.EAN_13}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">EAN-14:</p>
                <p>{data.EAN_14}</p>
              </div>
            </div>
          </div>
          <div className="border border-red-400 bg-red-400 w-full px-5 py-2 absolute bottom-0 right-0  rounded-br-2xl rounded-bl-2xl">
            <p className="text-white font-semibold">{data.Prov}</p>
          </div>
          <div className="bg-red-400 w-fit px-5 py-2 absolute top-0 right-0  rounded-tr-2xl rounded-bl-2xl">
            <p className="text-white font-semibold">{data.Tipo}</p>
          </div>
        </div>
      );
    }

    return (
      <div className=" max-w-lg min-w-90 text-center mx-auto p-5 mt-7 rounded-2xl relative bg-white shadow-xl">
        {itemExist == false
          ? `El item de código ${textInput} no existe `
          : "Ingrese un código para buscar"}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center gap-4 bg-indigo-500 p-4">
        <input
          type="text"
          value={textInput}
          onChange={handlerInput}
          className="rounded-full px-4 shadow-md focus:outline-none focus:ring focus:ring-sky-300"
        ></input>
        <button
          onClick={handlerButSearch}
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 rounded-full px-5 py-2 text-white font-semibold shadow-md"
        >
          Buscar
        </button>
      </div>
      <BodyQuery data={dataFindShow}></BodyQuery>
    </div>
  );


}

export default App;
