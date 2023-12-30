import { useLoaderData } from "react-router-dom";
import Sharps from "../Sharps/Sharps";

const Sharp = () => {

  const icons = useLoaderData();

  const sharpIcons = icons.filter(icon => icon.style === "regular" || icon.style === "light")
  return (
    <div>
      <h3 className="text-left font-medium">Sharp: {sharpIcons.length}</h3>

      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {sharpIcons.map((icon) => (
          <Sharps key={icon.id} icon={icon}></Sharps>
        ))}
      </div>
    </div>
  );
};

export default Sharp;