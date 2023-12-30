import { useLoaderData } from "react-router-dom";
import Communication from "../Communication/Communication";

const Communications = () => {
  const icons = useLoaderData();
  console.log(icons);

  const comIcons = icons.filter((icon) => icon.category === "Communication");
  return (
    <div>
      <h1 className="text-left font-medium">
        Communication: {comIcons.length}
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {comIcons.map((icon) => (
          <Communication key={icon.id} icon={icon}></Communication>
        ))}
      </div>
    </div>
  );
};

export default Communications;