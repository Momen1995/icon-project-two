import './Brand.css'

const Brand = ({icon}) => {
  const {image,category} = icon
  return (
    <div>
      <img src={image} className="image-size"></img>
      <p>{category}</p>
      <p></p>
    </div>
  );
};

export default Brand;