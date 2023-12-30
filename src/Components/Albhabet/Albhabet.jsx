
const Albhabet = ({icon}) => {
   const { image, category } = icon;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={image} className="w-20"></img>
      <p>{category}</p>
    </div>
  );
};

export default Albhabet;