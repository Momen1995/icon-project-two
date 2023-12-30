import { useEffect, useState } from "react";
import Roomy from "../Roomy/Roomy.jsx";
import { useLoaderData } from "react-router-dom";


const Roomys = () => {
  const icons = useLoaderData();

 
  return (
    <div>
      
      <div className="grid grid-cols-4 gap-3">
        {
          icons.map(icon => <Roomy Key={icon.id} icon={icon}></Roomy>)
          
        }
      </div>
    </div>
  );
};

export default Roomys;