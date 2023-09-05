import { createContext, useState } from "react";

export const DetailsContext = createContext();

export const DetailsContextProvider = ({ children }) => {
  // gpt
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // gpt
  const [allSelected, setAllSelected] = useState(false);

  const [categoryData, setCategoryData] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [isProductShown, setIsProductShown] = useState(false);
  const [customers, setCustomers] = useState(null);
  const [previousCategory, setPreviousCategory] = useState(null);
  const [drawerClosed, setDrawerClosed] = useState();

  // const [navigationFlow, setNavigationFlow] = useState({

  // })

  const value = {
    allSelected,
    categoryData,
    customers,
    drawerClosed,
    filteredWorks,
    isProductShown,
    previousCategory,
    selectedCategory,
    selectedProduct,
    setAllSelected,
    setCategoryData,
    setCustomers,
    setDrawerClosed,
    setFilteredWorks,
    setIsProductShown,
    setPreviousCategory,
    setSelectedCategory,
    setSelectedProduct,
  };

  return (
    <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
  );
};
