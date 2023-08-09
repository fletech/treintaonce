import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetData,
} from "../../lib/api";

import DescriptionSection from "../components/Hero/DescriptionSection";
import WorksSection from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

const Homepage = () => {
  const [works, setWorks] = useState();
  const [categories, setCategories] = useState();

  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 0,
    onSuccess: setWorks,
  });

  useQuery(["categories"], fetchGoogleSheetCategories, {
    staleTime: 0,
    onSuccess: setCategories,
  });

  return (
    <>
      {works && <WorksSection works={works} />}
      {works && <Banner />}
      {categories && <DescriptionSection categories={categories} />}
    </>
  );
};
export default Homepage;
