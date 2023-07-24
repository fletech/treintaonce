import { useContext } from "react";
import Context from "../context";

const Works = () => {
  const states = useContext(Context);

  const { works } = states;

  return (
    <>
      <div>
        <ul>
          {works.map((item, index) => (
            <li key={index}>{item.work_title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Works;
