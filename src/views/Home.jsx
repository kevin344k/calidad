// pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 justify-center items-center bg-gradient-to-tr from-indigo-600  to-purple-500 min-h-screen">
      <div
        className="p-5 bg-blue-500 text-white rounded-lg cursor-pointer"
        onClick={() => navigate("/suministros")}
      >
      Suministros
      </div>
      <div
        className="p-5 bg-green-500 text-white rounded-lg cursor-pointer"
        onClick={() => navigate("/ft-productos")}
      >
        Productos
      </div>

    </div>
  );
}
