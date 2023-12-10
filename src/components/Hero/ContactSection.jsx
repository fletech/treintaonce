import { Subtitle } from "../Commons/Commons";
import CtaButton from "../Commons/CtaButton";

const ContactSection = () => {
  return (
    <section className="my-20 w-full flex flex-col justify-center items-start">
      <Subtitle
        text="Tenés una idea, o alguna consulta?"
        group={true}
        ctaColumn={true}
      />
      <CtaButton url="/contactanos" primary={true} group={true}>
        Contactanos
      </CtaButton>
    </section>
  );
};

export default ContactSection;
