import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  fetchGoogleSheetCategories,
  fetchGoogleSheetData,
  fetchGoogleSheetRelationWorkCategory,
} from "../../lib/api";
import { useState } from "react";

const Details = () => {
  const [works, setWorks] = useState();
  const [categories, setCategories] = useState();
  const [relationWorkCategory, setRelationWorkCategory] = useState();
  useQuery(["works"], fetchGoogleSheetData, {
    staleTime: 3000,
    onSuccess: setWorks,
  });

  useQuery(["categories"], fetchGoogleSheetCategories, {
    staleTime: 3000,
    onSuccess: setCategories,
  });

  useQuery(["works-categories"], fetchGoogleSheetRelationWorkCategory, {
    staleTime: 3000,
    onSuccess: setRelationWorkCategory,
  });

  const params = useParams();

  return (
    <section className="mt-32">
      <div>Hello</div>
    </section>
  );
};
export default Details;
