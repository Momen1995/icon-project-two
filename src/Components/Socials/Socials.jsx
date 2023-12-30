import { useLoaderData } from "react-router-dom";
import Social from "../Social/Social";


const Socials = () => {
  const icons = useLoaderData();
  const socialIcons = icons.filter((icon) => icon.category === "Social");
  return (
    <div>
      <h1 className="text-left font-medium">Social: {socialIcons.length}</h1>

      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {socialIcons.map((icon) => (
          <Social key={icon.id} icon={icon}></Social>
        ))}
      </div>
    </div>
  );
};

export default Socials;