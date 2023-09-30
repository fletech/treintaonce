import { Subtitle } from "../Commons/Commons";
import HookForm from "./HookForm";

const ContactForm = () => {
  // state para renderizar mensaje de agradecimiento si ya se envió el mensaje, o el formulario
  return (
    <main className="w-full h-[76vh] flex lg:flex-row flex-col  lg:gap-0 lg:divide-x  divide-slate-200">
      {/* <section className=" lg:w-1/2  lg:pr-8 lg:py-8 flex flex-col items-center justify-center gap-10 mb-10"> */}
      <section className=" lg:w-1/2  lg:pr-8 lg:py-8 flex flex-col items-start justify-center gap-2 mb-10">
        {/* <span
          className=" lg:text-2xl font-normal  tracking-widest bg-primary
          w-fit p-4 text-white italic uppercase"
        >
          dejanos un mensaje
        </span> */}

        <Subtitle text={"dejanos tu mensaje"} />
        <p className="font-light tracking-widest text-justify lg:text-xl font-blackish">
          A través de este formulario podrás enviarnos tus inquietudes, y al
          seleccionar un asunto nos das una pista sobre qué andás buscando 🙂.
          <br />
          Estaremos muy felices de poder{" "}
          <span className="border-b-2 border-primary">
            ayudarte con tus ideas
          </span>{" "}
          y de personalizar objetos, una vez más.
        </p>
      </section>

      <section className="lg:w-1/2 lg:pl-8 lg:py-8 flex flex-col pt-10">
        <HookForm />
      </section>
    </main>
  );
};

export default ContactForm;
