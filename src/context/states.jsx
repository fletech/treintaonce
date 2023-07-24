import { useState } from "react";

const States = () => {
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  const STATES = {
    categories,
    types,
    works,
    setCategories,
    setTypes,
    setWorks,
  };
  return STATES;
};
export default States;
