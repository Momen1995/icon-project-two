import { useLoaderData } from "react-router-dom";
import Business from "../Business/Business";


const Businesses = () => {
  const icons = useLoaderData();

  const busIcons = icons.filter((icon) => icon.category === "Business");
  return (
    <div>
      <h1>Business : {busIcons.length}</h1>

      <div className="grid grid-cols-5 gap-6 text-center">
        {busIcons.map((icon) => (
          <Business key={icon.id} icon={icon}></Business>
        ))}
      </div>
    </div>
  );
};

export default Businesses;