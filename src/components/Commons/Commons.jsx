import CtaButton from "./CtaButton";

const Subtitle = ({ text, group, ctaColumn }) => {
  return (
    <h2
      className={`font-bold text-2xl uppercase text-primary tracking-wider w-fit ${
        !group && "mb-4"
      } ${ctaColumn && "mb-6"}`}
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
