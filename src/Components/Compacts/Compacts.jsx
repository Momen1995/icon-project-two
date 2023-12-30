import { useLoaderData } from "react-router-dom";
import Compact from "../Compact/Compact";


const Compacts = () => {
  const icons = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-7 gap-3">
        {icons.map((icon) => (
          <Compact Key={icon.id} icon={icon}></Compact>
        ))}
      </div>
    </div>
  );
};

export default Compacts;