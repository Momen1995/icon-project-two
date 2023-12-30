import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Alert from '../Alert/Alert';

const Alerts = () => {
  const icons = useLoaderData();
  console.log(icons);

  const alertIcons = icons.filter(
    (icon) => icon.category === "Alert");

  return (
    <div>
      <h3>Alert: {alertIcons.length}</h3>

      <div className="grid grid-cols-5 gap-6 text-center">
        {alertIcons.map((icon) => (
          <Alert key={icon.id} icon={icon}></Alert>
        ))}
      </div>
    </div>
  );
};

export default Alerts;