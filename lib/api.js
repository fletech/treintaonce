import axios from "axios";
import { useQuery } from "react-query";

async function fetchData(url) {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.values;
  } else {
    throw new Error("Error fetching data from API");
  }
}

// Función para obtener los datos de la hoja de cálculo "works"
async function fetchGoogleSheetData(url) {
  const rows = await fetchData(url);

  // Resto del código para procesar los datos...
  const headers = rows[0];
  const dataObjects = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  console.log(dataObjects);
  return dataObjects;
}

const useReactQuery = (string, cb, setData) => {
  const { isSuccess, data } = useQuery(string, cb, { onSuccess: setData });

  if (!isSuccess) return [];

  return data.results;
};

export { useReactQuery, fetchData, fetchGoogleSheetData };
