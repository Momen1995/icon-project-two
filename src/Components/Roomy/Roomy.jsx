

const Roomy = ({icon}) => {
   const { image, category } = icon;
  return (
    <div className="flex flex-col justify-center items-center shadow-lg py-4 hover:bg-orange-300 duration-300">
       <img src={image} className="w-12"></img>
      <p className="font-medium p-4">{category}</p>
    </div>
  );
};

export default Roomy;