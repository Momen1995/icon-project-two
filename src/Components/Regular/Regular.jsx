import { useLoaderData } from "react-router-dom";
import Regulars from "../Regulars/Regulars";

const Regular = () => {

  const icons = useLoaderData()

  const regularIcons = icons.filter(
    (regularIcon) => regularIcon.style === "regular"
  );

  
  return (
    <div>
      <h3>This is a regular : {regularIcons.length}</h3>

      <div className="grid grid-cols-5 gap-6 text-center">
        {regularIcons.map((icon) => (
          <Regulars key={icon.id} icon={icon}></Regulars>
        ))}
      </div>
    </div>
  );
};

export default Regular;