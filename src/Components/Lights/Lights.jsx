import { useLoaderData } from "react-router-dom";
import Light from "../Light/Light";


const Lights = () => {
   const icons = useLoaderData();
   console.log(icons);

   const lightIcons = icons.filter(
     (icon) => icon.style === "light");

  return (
    <div>
      <h1>Light : {lightIcons.length}</h1>

      <div className="grid grid-cols-5 gap-6 text-center">
        {lightIcons.map((icon) => (
          <Light key={icon.id} icon={icon}></Light>
        ))}
      </div>
    </div>
  );
};

export default Lights;