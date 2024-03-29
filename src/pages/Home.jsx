import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

import { fetchGoogleSheetData } from "../../lib/api";
import DescriptionSection from "../components/Hero/DescriptionSection";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Loading from "../components/Hero/HeroLoading";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDetailsContext } from "../../context/useDetailsContext";
import ContactSection from "../components/Hero/ContactSection";

const Home = () => {
  const location = useLocation();
  const location_path = location.pathname;
  const {
    setIsProductShown,
    setFilteredWorks,
    setAllSelected,
    setDrawerClosed,
    setSelectedProduct,
    setSelectedCategory,
  } = useDetailsContext();

  const works = useQuery({
    queryKey: ["works"],
    queryFn: fetchGoogleSheetData,
    cacheTime: 300000,
    staleTime: 0,
  });

  useEffect(() => {
    if (location_path == "/") {
      setIsProductShown(false);
      setDrawerClosed(false);
      setFilteredWorks([]);
      setAllSelected(false);
      setSelectedProduct({});
      setSelectedCategory([]);
    }
  }, [location_path]);

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
        <ContactSection />
      </motion.div>
    )
  );
};
export default Home;
