import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import { useEffect } from "react";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const Contact = () => {
  const params = useParams();
  const navigate = useNavigate();
  const params_id = params.id;

  // window.location.reload();

  // window.location.reload();

  // const reload = () => {
  //   window.location.reload();
  //   window.addEventListener("load", () => {
  //     navigate(`/contactanos/${params_id}`);
  //   })
  //   return () => {
  //     window.removeEventListener("load", () => {
  //       navigate(`/contactanos/${params_id}`);
  //     })
  //   }
  // }
  useEffect(() => {
    // if (params_id) {
    //   window.location.reload();
    // }
    // window.addEventListener("load", () => {
    //   window.location.reload();
    //   navigate(`/contactanos/${params_id}`);
    // });
    // return () => {
    //   window.removeEventListener("load", () => {
    //     window.location.reload();
    //     navigate(`/contactanos/${params_id}`);
    //   });
    // };
    // redirect(`/contactanos/${params_id}`);
    // window.location.reload(false);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mt-16 md:mt-24 w-full h-full ">
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
