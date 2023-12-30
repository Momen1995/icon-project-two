import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Solids from '../Solids/Solids';


const Solid = () => {
  const icons = useLoaderData()

  const solidIcons = icons.filter(
    (icon) => icon.style === "solid"
  );


  return (
    <div>
      <h3 className="text-left font-medium">Solid : {solidIcons.length}</h3>

      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {solidIcons.map((solidIcon) => (
          <Solids key={solidIcon.id} solidIcon={solidIcon}></Solids>
        ))}
      </div>
    </div>
  );
};

export default Solid;