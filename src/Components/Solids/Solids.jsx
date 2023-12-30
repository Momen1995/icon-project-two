import './solids.css'
const Solids = ({solidIcon}) => {
    const { image, category } = solidIcon;
  return (
    <div>
      <img src={image} className="image-size"></img>
      <p>{category}</p>
    </div>
  );
};

export default Solids;