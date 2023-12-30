import { useLoaderData } from "react-router-dom";
import Classics from "../Classics.jsx/Classics";
import Alerts from "../Alerts/Alerts";


const Classic = () => {
  const icons = useLoaderData();
  console.log(icons)

  const classicIcons = icons.filter(icon => icon.style === "solid" || icon.style === "thin")
  console.log(classicIcons)

  return (
    <div>
      <h3>This is a Classic : {classicIcons.length}</h3>

      <div className="grid grid-cols-5 gap-6 text-center">
        {
          classicIcons.map(icon => <Classics key={icon.id} icon={icon}></Classics>)
        }
      </div>
    </div>
  );
};

export default Classic;