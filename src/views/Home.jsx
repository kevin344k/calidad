// pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className=" flex  gap-4 justify-center items-center ">
      <div className="flex flex-col w-[80%] text-center gap-4 justify-center items-center">
        <div
          className="p-5 w-[270px] h-[270px] rounded-lg cursor-pointer"
          onClick={() => navigate("/suministros")}
        >
  
         <div className="w-full h-full rounded-tl-lg rounded-tr-lg overflow-hidden object-cover">
                    <img className="w-full h-full" src="https://www.earturo.com.do/web/image/product.template/1014/image" alt="" />
          </div>
        <div className="bg-green-500 text-white rounded-bl-lg rounded-br-lg py-3">
          <p>  Suministros</p>
        </div>
        </div>
        <div
          className="p-5 w-[270px] h-[270px] rounded-lg cursor-pointer"
          onClick={() => navigate("/ft-productos")}
        >
            <div className="w-full h-full rounded-tl-lg rounded-tr-lg overflow-hidden object-cover">
                    <img className="w-full h-full" src="https://zodiplast.com.ec/wp-content/uploads/2022/08/SUPER-VIANDA-AMARILLA-DIPOR-X-25-UND-SVA-2.jpg" alt="" />
          </div>
        <div className="bg-green-500 text-white rounded-bl-lg rounded-br-lg py-3">
          <p>  Productos</p>
        </div>
        </div>
        <div
          className="p-5 w-[270px] h-[270px] cursor-pointer"
          onClick={() => navigate("/resinas")}
        >
          <div className="w-full h-full rounded-tl-lg rounded-tr-lg overflow-hidden object-cover">
                    <img className="w-full h-full" src="https://d2n4wb9orp1vta.cloudfront.net/cms/brand/PT-Mex/2019-PT-Mex/bamberger.png;maxWidth=1200" alt="" />
          </div>
        <div className="bg-green-500 text-white rounded-bl-lg rounded-br-lg py-3">
          <p>  Resinas</p>
        </div>
        </div>
      </div>
    </div>
  );
}
