import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetData,
} from "../../lib/api";

import DescriptionSection from "../components/Hero/DescriptionSection";
import WorksSection from "../components/Hero/Hero";

const Homepage = () => {
  const [works, setWorks] = useState();
  const [categories, setCategories] = useState();

  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 3000,
    onSuccess: setWorks,
  });

  useQuery(["categories"], fetchGoogleSheetCategories, {
    staleTime: 3000,
    onSuccess: setCategories,
  });

  return (
    <>
      <WorksSection works={works} />
      <DescriptionSection categories={categories} />
    </>
  );
};
export default Homepage;
