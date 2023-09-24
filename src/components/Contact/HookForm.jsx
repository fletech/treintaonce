import { useForm } from "react-hook-form";
import React from "react";

export const FormElement = ({ children, text, name }) => {
  console.log(children.props.className);
  return (
    <div className="w-full flex flex-col w-full mb-6">
      <label
        id={name}
        htmlFor=""
        className="mb-2 tracking-wider font-semibold text-lg"
      >
        {text}
      </label>
      <div className="w-full border-[1px] rounded-md  caret-primary">
        {children}
      </div>
    </div>
  );
};

export default function HookForm() {
  const inputClassname =
    "text-lg text-blackish font-thin w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-slate autofill:bg-bgHighlighted";
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center h-full"
    >
      <FormElement text={"Nombre"} name={"name"}>
        <input
          className={inputClassname}
          name="name"
          type="text"
          placeholder="Tu nombre "
        />
      </FormElement>
      <FormElement text={"Email"} name={"email"}>
        <input
          className={inputClassname}
          name="email"
          type="email"
          placeholder="ej: hola@treintaonce.ar"
        />
      </FormElement>
    </form>
  );
}
