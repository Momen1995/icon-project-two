import { useLoaderData } from 'react-router-dom';
import Brand from '../Brand/Brand';
import "./Brands.css"

const Brands = () => {

  const icons = useLoaderData()
  console.log(icons)
  return (
    <div>
      <h3>This is a Brand : {icons.length}</h3>

      <div className='one'>
        {
          icons.map(icon => <Brand key={icon.id} icon={icon}></Brand>)
        }
      </div>
    </div>
  );
};

export default Brands;