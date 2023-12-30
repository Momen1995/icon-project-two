import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderTwo from "../HeaderTwo/HeaderTwo";


const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="flex gap-4">
        <div className="w-2/12 mt-12 text-left">
          <HeaderTwo></HeaderTwo>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;