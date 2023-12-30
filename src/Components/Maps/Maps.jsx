import { useLoaderData } from "react-router-dom";
import Map from "../Map/Map";

const Maps = () => {
  const icons = useLoaderData();
  const mapIcons = icons.filter((icon) => icon.category === "Map");
  return (
    <div>
      <h1>Map : {mapIcons.length}</h1>

      <div className="grid grid-cols-5 gap-6 text-center">
        {mapIcons.map((icon) => (
          <Map key={icon.id} icon={icon}></Map>
        ))}
      </div>
    </div>
  );
};

export default Maps;