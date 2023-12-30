import { useLoaderData } from "react-router-dom";
import Thins from "../Thins/Thins";
import './Thin.css'

const Thin = () => {
  const icons = useLoaderData();

  const thinIcons = icons.filter(
    (thinIcon) => thinIcon.style === "thin"
  );
  return (
    <div>
      <h3>This is a thin: {thinIcons.length}</h3>

      <div className="one">
        {
          thinIcons.map(icon => <Thins key={icon.id} icon={icon}></Thins>)
        }
      </div>
    </div>
  );
};

export default Thin;