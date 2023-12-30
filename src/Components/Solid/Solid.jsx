import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Solids from '../Solids/Solids';
import './Solid.css'

const Solid = () => {
  const icons = useLoaderData()

  const solidIcons = icons.filter(
    (icon) => icon.style === "solid"
  );

  console.log(solidIcons)


  return (
    <div>
      <h3>This is a solid : {solidIcons.length}</h3>

      <div className='one'>
        {solidIcons.map((solidIcon) => (
          <Solids key={solidIcon.id} solidIcon={solidIcon}></Solids>
        ))}
      </div>
    </div>
  );
};

export default Solid;