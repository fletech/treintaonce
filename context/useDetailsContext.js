import { useContext } from "react";
import { DetailsContext } from "./DetailsContextProvider"; // Importar el contexto desde el nuevo archivo de componente

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error(
      "useDetailsContext must be used within a DetailsContextProvider"
    );
  }
  return context;
};
