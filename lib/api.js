import axios from "axios";
import { worksURL } from "./constants";

async function fetchData(url) {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.values;
  } else {
    throw new Error("Error fetching data from API");
  }
}

// Función para obtener los datos de la hoja de cálculo "works"
const fetchGoogleSheetData = async () => {
  const rows = await fetchData(worksURL);

  // Resto del código para procesar los datos...
  const headers = rows[0];
  const dataObjects = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  return dataObjects;
};

export { fetchGoogleSheetData };
