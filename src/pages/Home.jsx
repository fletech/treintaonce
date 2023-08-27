import { useQuery } from "@tanstack/react-query";
import {
  // fetchGoogleSheetCategories,
  fetchGoogleSheetData,
} from "../../lib/api";

import DescriptionSection from "../components/Hero/DescriptionSection";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Loading from "../components/Hero/HeroLoading";

import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const works = useQuery({
    queryKey: ["works"],
    queryFn: fetchGoogleSheetData,
    cacheTime: 300000,
    staleTime: 0,
  });

  if (
    works.isLoading
    // || categories.isLoading
  ) {
    return <Loading />;
  }

  return (
    works.data && (
      // categories.data &&
      <motion.div
        initial={{ opacity: 0.5, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Hero works={works.data} />
        <Banner />
        <DescriptionSection />
      </motion.div>
    )
  );
};
export default Home;
