import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div>
      <nav className="flex justify-between">
        <div className="flex gap-6">
          <Link to="/classic">Classic</Link>
          <Link to="/sharp">Sharp</Link>
          <Link to="/brand">Brand</Link>
          <Link to="/free">Free</Link>
        </div>
        <div className="flex gap-6">
          <Link to="/roomy">Roomy</Link>
          <Link to="/compact">Compact</Link>
          <Link to="/cheetsheet">Cheetsheet</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;