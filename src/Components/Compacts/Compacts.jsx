import { useLoaderData } from "react-router-dom";
import Compact from "../Compact/Compact";


const Compacts = () => {
  const icons = useLoaderData();
  return (
    <div>
      <h1 className="text-left font-medium">Compact: {icons.length}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5  gap-3">
        {icons.map((icon) => (
          <Compact Key={icon.id} icon={icon}></Compact>
        ))}
      </div>
    </div>
  );
};

export default Compacts;