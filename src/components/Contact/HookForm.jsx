import { useForm } from "react-hook-form";
import React, { useState, useEffect, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useOutsideComponent from "../../hooks/useOutsideComponent";

export const CustomSelect = ({ className, categories }) => {
  const options = ["Desarrollo de Producto", "Diseño", "Materiales", "Otros"];
  const [clicked, setClicked] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState(null);
  const wrapperRef = useRef(null);

  useOutsideComponent(wrapperRef, setClicked);

  const selectHandler = (e, cb) => {
    setSelected(e.target.textContent);
    setClicked(false);
  };

  const cancelHandler = () => {
    setClicked(true);
    setSelected(null);
  };
  useEffect(() => {
    clicked ? setOpenSelect(true) : setOpenSelect(false);
  }, [clicked]);

  return (
    <div
      ref={wrapperRef}
      className={`${className} flex justify-between items-center cursor-pointer h-full pr-4 relative ${
        openSelect && "pointer-events-auto"
      } ${clicked && "ring ring-slate"}`}
      onClick={() => setClicked(!clicked)}
    >
      <p className={selected ? "text-blackish" : "text-gray-400"}>
        {selected ? selected : "Seleccioná el motivo..."}
      </p>

      {/* {clicked && (
        <p className="text-gray-400">
          Escribí acá o seleccioná de la siguiente lista...
        </p>
      )} */}
      <BiSolidDownArrow className="text-primary" />

      {openSelect && (
        <div
          className={`absolute w-full h-auto bg-white top-12 left-0 z-100 rounded-lg border-2 p-4 shadow-xl z-40`}
        >
          {options.map((option) => (
            <div onClick={(e) => selectHandler(e)}>
              <p
                className={`${
                  option == selected ? "font-semibold text-primary" : ""
                }`}
              >
                {option}
              </p>
            </div>
          ))}
          {selected && (
            <div
              className="inline-block border border-primary rounded-full bg-primary hover:font-normal text-white my-2 px-2 pb-[3px] cursor-pointer"
              onClick={() => cancelHandler()}
            >
              <RiDeleteBin6Fill className="inline-block mr-[3px] text-sm mb-[2px]" />
              <p className={`${"inline-block font-thin text-sm "}`}>Eliminar</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const FormElement = ({ children, text, name, required }) => {
  console.log(children.props.className);
  return (
    <div className="relative w-full flex flex-col w-full mb-6 ">
      <label
        id={name}
        htmlFor=""
        className="mb-2 tracking-wider font-main font-semibold text-lg"
      >
        {text}
        {required && <span className="text-primary"> *</span>}
      </label>
      <div className="w-full border-[1px] rounded-md  caret-primary min-h-[32px] flex items-center">
        {children}
      </div>
    </div>
  );
};

export default function HookForm() {
  const inputClassname =
    "text-lg text-blackish font-main font-thin w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-slate autofill:bg-bgHighlighted autofill:font-thin appearance-none";
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
      <FormElement text={"Nombre"} name={"name"} required>
        <input
          className={inputClassname}
          name="name"
          type="text"
          placeholder="Tu nombre "
        />
      </FormElement>
      <FormElement text={"Email"} name={"email"} required>
        <input
          className={inputClassname}
          name="email"
          type="email"
          placeholder="ej: hola@treintaonce.ar"
        />
      </FormElement>
      <FormElement text={"Asunto"} name={"issue"}>
        <CustomSelect className={inputClassname} />
      </FormElement>
      <FormElement text={"Mensaje"} name={"field"} required>
        <input
          className={inputClassname}
          name="field"
          type="textarea"
          placeholder="Escribí tu mensaje acá..."
        />
      </FormElement>
    </form>
  );
}
