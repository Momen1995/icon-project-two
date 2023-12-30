import { useLoaderData } from "react-router-dom";
import Albhabet from "../Albhabet/Albhabet";

const Albhabets = () => {

  const icons = useLoaderData();
  console.log(icons);

  const alphaIcons = icons.filter((icon) => icon.category === "Alphabet");
  return (
    <div>
      <h1>Albhabet : {alphaIcons.length}</h1>

      <div className="grid grid-cols-5 gap-6 text-center">
        {alphaIcons.map((icon) => (
          <Albhabet key={icon.id} icon={icon}></Albhabet>
        ))}
      </div>
    </div>
  );
};

export default Albhabets;