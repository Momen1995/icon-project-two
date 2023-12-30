import { useLoaderData } from "react-router-dom";
import Thins from "../Thins/Thins";

const Thin = () => {
  const icons = useLoaderData();

  const thinIcons = icons.filter(
    (thinIcon) => thinIcon.style === "thin"
  );
  return (
    <div>
      <h3>This is a thin: {thinIcons.length}</h3>

      <div className="grid grid-cols-5 gap-6 text-center">
        {thinIcons.map((icon) => (
          <Thins key={icon.id} icon={icon}></Thins>
        ))}
      </div>
    </div>
  );
};

export default Thin;