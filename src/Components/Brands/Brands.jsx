import { useLoaderData } from 'react-router-dom';
import Brand from '../Brand/Brand';

const Brands = () => {

  const icons = useLoaderData()
  console.log(icons)
  return (
    <div>
      <h3 className="text-left font-medium">Brand : {icons.length}</h3>

      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {icons.map((icon) => (
          <Brand key={icon.id} icon={icon}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;