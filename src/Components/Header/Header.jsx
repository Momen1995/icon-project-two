import { Link } from "react-router-dom";
import {
  FaQrcode,
  FaGripHorizontal,
  FaBolt,
  FaCamera,
  FaCar,
  FaForward,
  FaRegFlag,
} from "react-icons/fa";



const Header = () => {
  return (
    <div>
      <nav className="flex flex-col lg:flex lg:flex-row gap-3 justify-between">
        <div className="flex gap-10">
          <Link to="/classic">
            <div className="flex text-xl gap-1 text-blue-950 font-bold">
              <div>
                <FaCamera></FaCamera>
                <FaCar></FaCar>
              </div>
              <div>
                <FaBolt></FaBolt>
                <FaForward></FaForward>
              </div>
            </div>
            Classic
          </Link>
          <Link to="/sharp">
            <div className="flex text-xl gap-1 text-blue-950 font-bold">
              <div>
                <FaCamera></FaCamera>
                <FaCar></FaCar>
              </div>
              <div>
                <FaBolt></FaBolt>
                <FaForward></FaForward>
              </div>
            </div>
            Sharp
          </Link>
          <Link to="/brand">
            <FaRegFlag className="text-4xl mb-1 text-blue-950" />
            Brand
          </Link>
          <Link to="/free">
            <FaBolt className="text-4xl mb-1 text-blue-950"></FaBolt>Free
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/roomy">
            <FaQrcode className="text-4xl text-blue-800"></FaQrcode>
          </Link>
          <Link to="/compact">
            <FaGripHorizontal className="text-4xl text-blue-800"></FaGripHorizontal>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;