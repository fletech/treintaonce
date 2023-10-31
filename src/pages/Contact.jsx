import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
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
