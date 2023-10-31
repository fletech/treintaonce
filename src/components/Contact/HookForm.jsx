import { useForm, useController } from "react-hook-form";
import React, { useState, useEffect, useRef, forwardRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useOutsideComponent from "../../hooks/useOutsideComponent";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { apiKey, baseURL } from "../../../lib/constants";
import { getFormattedDate } from "../../../lib/functions";
import { FaSpinner } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import { ErrorMessage } from "@hookform/error-message";

export const CustomSelect = ({
  className,
  selected,
  clicked,
  setClicked,
  setSelected,
  handleSelectChange,
}) => {
  const options = [
    "Desarrollo de Producto",
    "Diseño",
    "Materiales",
    "Presupuesto",
    "Consultas generales",
    "Otros",
  ];

  const [openSelect, setOpenSelect] = useState(false);

  const wrapperRef = useRef(null);

  useOutsideComponent(wrapperRef, setClicked);

  const selectHandler = (e) => {
    setSelected(e.target.textContent);
    handleSelectChange(e.target.textContent);
    setClicked(false);
    setOpenSelect(false);
  };

  const cancelHandler = () => {
    setSelected("");
    handleSelectChange("");
    setClicked(false);
    setOpenSelect(false);
  };

  useEffect(() => {
    clicked ? setOpenSelect(true) : setOpenSelect(false);
  }, [clicked]);

  return (
    <div
      id="select-id"
      ref={wrapperRef}
      className={`${className} flex justify-between items-center cursor-pointer  h-full pr-4 relative ${
        openSelect && "pointer-events-auto"
      } ${clicked && "ring ring-slate"}`}
      onClick={() => setClicked(true)}
      onFocus={() => setClicked(true)}
      onBlur={() => setClicked(false)}
      tabIndex={0}
    >
      <input
        type="text"
        className={`
        font-thin outline-none w-full h-full text-lg py-[1px] cursor-pointer 
        ${selected ? "text-blackish" : "text-gray-400 "} ${
          clicked ? "bg-white" : "bg-transparent"
        }`}
        placeholder="Seleccioná el motivo..."
        value={selected}
        readOnly
        tabIndex={-1}
        // TODO: fix this
      />

      <BiSolidDownArrow className="text-primary" />

      {openSelect && (
        <div
          className={`absolute w-full h-auto bg-white top-12 left-0 z-100 rounded-lg border-2 py-4 shadow-xl z-40`}
        >
          {options.map((option, i) => (
            <div
              onClick={(e) => selectHandler(e)}
              key={i}
              className={`px-4 hover:bg-primaryOpacity hover:cursor-pointer ${
                option == selected ? "font-semibold " : ""
              }`}
            >
              <p
                className={`${
                  option == selected ? "font-semibold text-primary " : ""
                }`}
              >
                {option}
              </p>
            </div>
          ))}
          {selected && (
            <div
              className="inline-block border border-warning rounded-full bg-warning hover:font-normal text-white mt-4  ml-4 px-2 pb-[3px] cursor-pointer"
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

export const FormElement = ({
  children,
  text,
  name,
  required,
  forID,
  error,
}) => {
  return (
    <div className="relative w-full flex flex-col w-full mb-6 ">
      <label
        id={name}
        htmlFor={forID}
        className="mb-2 tracking-wider font-main font-semibold text-lg"
      >
        {text}
        {required && <span className="text-primary"> *</span>}
      </label>
      <div className="w-full border-[1px] rounded-md  caret-primary min-h-[32px] flex items-center">
        {children}
      </div>
      {error?.email && (
        <div>
          <p>Debes completar este campo</p>
        </div>
      )}
    </div>
  );
};

const HookForm = () => {
  const inputClassname =
    "text-lg text-blackish font-main font-thin w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-slate autofill:bg-bgHighlighted autofill:font-thin appearance-none";

  const [selected, setSelected] = useState("");
  const [clicked, setClicked] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm();
  const { field } = useController({ name: "issue", control });
  const id = uuid();

  const handleSelectChange = (option) => {
    field.onChange(option);
  };

  // ...

  const handleEmailKeyDown = (event) => event.key === "Tab" && setClicked(true);

  const onSubmit = async (data) => {
    console.log(data);
    const url = `${import.meta.env.VITE_GOOGLE_SCRIPT}`;

    const currentDate = getFormattedDate();

    const params = {
      ID: id,
      date: currentDate,
      name: data.name,
      email: data.email,
      issue: data.issue,
      message: data.message,
      status: false,
    };
    const toastOptions = {
      position: isMobile ? "top-center" : "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    try {
      console.log("sending...");
      const RESPONSE = await axios.post(url, JSON.stringify(params));
      console.log(RESPONSE);
      reset();
      setSelected(null);
      toast.success(
        "Recibimos tu mensaje 🙂. A más tardar mañana, te respondemos. ",
        {
          ...toastOptions,
        }
      );
    } catch (err) {
      toast.error("No pudimos recibir tu mensaje 👎🏼 Intentá nuevamente", {
        ...toastOptions,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center h-full"
    >
      <FormElement text={"Nombre"} name={"name"} forID={"name"} required>
        <input
          id="name"
          className={inputClassname}
          name="name"
          type="text"
          placeholder="Tu nombre "
          {...register("name", { required: true })}
          error={errors}
        />
      </FormElement>
      <FormElement text={"Email"} name={"email"} forID={"email"} required>
        <input
          id="email"
          className={inputClassname}
          name="email"
          type="email"
          placeholder="ej: hola@treintaonce.ar"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          error={errors}
          // onKeyDown={(e) => handleEmailKeyDown(e)}
        />
      </FormElement>
      <FormElement text={"Asunto"} name={"issue"}>
        <CustomSelect
          value={field.value}
          className={inputClassname}
          selected={selected}
          setSelected={setSelected}
          clicked={clicked}
          setClicked={setClicked}
          handleSelectChange={handleSelectChange}
          error={errors}
        />
      </FormElement>
      <FormElement text={"Mensaje"} name={"message"} required>
        <textarea
          id="message"
          className={inputClassname}
          name="message"
          placeholder="Tu mensaje"
          {...register("message", { required: true })}
          error={errors}
        />
      </FormElement>
      <button
        type="submit"
        className="bg-primary text-white font-main font-semibold text-lg rounded-md py-2 px-6 mt-6 disabled:opacity-50 w-full"
        disabled={!isDirty && !isValid}
      >
        {isSubmitting ? (
          <FaSpinner className="animate-spin inline-block mr-2" />
        ) : (
          "Enviar"
        )}
      </button>
      <ToastContainer />
    </form>
  );
};

export default HookForm;
