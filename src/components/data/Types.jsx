import { useContext } from "react";
import Context from "../../context";

const Types = () => {
  const states = useContext(Context);

  const { types } = states;

  return (
    <>
      <div>
        <ul>
          {types.map((item, index) => (
            <li key={index}>{item.type_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Types;
