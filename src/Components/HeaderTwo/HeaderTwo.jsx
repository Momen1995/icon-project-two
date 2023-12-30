import { Link } from "react-router-dom";

const HeaderTwo = () => {
  return (
    <div>
      <nav>
        <p className="text-xl font-semibold mb-4">Style</p>
        <div className="flex flex-col gap-3 font-medium">
          <Link to="/solid">Solid</Link>
          <Link to="/regular">regular</Link>
          <Link to="/thin">Thin</Link>
          <Link to="/light">Light</Link>
        </div>

        <p className="text-xl font-semibold mt-6 mb-2">Feature</p>
        <div className="flex flex-col gap-3 font-medium">
          <Link to="/alert">Alert</Link>
          <Link to="/alphabet">Alphabet</Link>
          <Link to="/communication">Communication</Link>
          <Link to="/light">Business</Link>
          <Link to="/map">Map</Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTwo;