import React from "react";

const Subtitle = ({ text, group }) => {
  return (
    <h2
      className={`font-bold text-2xl uppercase text-primary tracking-wider ${
        !group && "mb-4"
      }`}
    >
      {text}
    </h2>
  );
};

const Title = ({ text }) => {
  return (
    <h1 className="font-bold text-3xl uppercase mb-10 text-primary tracking-widest">
      {text}
    </h1>
  );
};
export { Subtitle, Title };
