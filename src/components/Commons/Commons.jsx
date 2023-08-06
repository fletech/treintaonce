import React from "react";

const Subtitle = ({ text }) => {
  return (
    <h2 className="font-bold text-2xl uppercase mb-4 text-primary tracking-wider">
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
