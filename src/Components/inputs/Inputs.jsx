import { useEffect } from "react";
import { useState } from "react";
import Input from "../Input/Input";


const Inputs = () => {
  const [icons, setIcons] = useState([]);
  const [inputIcon, setInputIcon] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    fetch("icons.json")
      .then((res) => res.json())
      .then((data) => setIcons(data));
  }, []);

  console.log(icons);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);


    const inputIcon = icons.filter(
      (icon) =>
        e.target.name.value.toLowerCase() === icon.category ||
        e.target.name.value.slice(0, 1).toUpperCase() +
          e.target.name.value.slice(1).toLowerCase() ===
          icon.category
    );
    console.log(inputIcon);
    setInputIcon(inputIcon);

     if (inputIcon.length === 0) {
       setErrorMessage("Page not found");
     } else {
       setErrorMessage("Page found");
     }
  };
  return (
    <div className="w-8/12 mx-auto mt-3 mb-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Search"
          className="border-2 w-full p-4 rounded"
        />
      </form>
      {errorMessage && (
        <p className="text-red-600 font-semibold mt-5 text-xl">
          {errorMessage} : {inputIcon.length}
        </p>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-5  gap-6 text-center">
        {inputIcon.map((icon) => (
          <Input key={icon.id} icon={icon}></Input>
        ))}
      </div>
    </div>
  );
};

export default Inputs;
