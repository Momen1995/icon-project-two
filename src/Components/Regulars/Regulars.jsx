import './Regulars.css'
const Regulars = ({icon}) => {
  const { image, category } = icon;
  return (
    <div>
      <img src={image} className="image-size"></img>
      <p>{category}</p>
    </div>
  );
};

export default Regulars;