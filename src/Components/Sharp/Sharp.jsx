import { useLoaderData } from "react-router-dom";

const Sharp = () => {

  const icons = useLoaderData();

  const sharpIcons = icons.filter(icon => icon.style === "solid" || icon.style === "thin")
  return (
    <div>
      <h3>This is a sharp: {sharpIcons.length}</h3>
    </div>
  );
};

export default Sharp;