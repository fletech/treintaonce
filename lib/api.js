import axios from "axios";
import {
  categoriesURL,
  customersURL,
  workCategoryURL,
  worksURL,
} from "./constants";
import { data } from "autoprefixer";

async function fetchData(url) {
  const response = await axios.get(url);
  if (response.status === 200) {
    return response.data.values;
  } else {
    throw new Error("Error fetching data from API");
  }
}

const fetchGoogleSheetCustomers = async () => {
  const rows = await fetchData(customersURL);

  // Resto del código para procesar los datos...
  const headers = rows[0];
  const dataObjects = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  // console.log(dataObjects);
  return dataObjects;
};

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
  // console.log(dataObjects);
  return dataObjects;
};
// Función para obtener los datos de la hoja de cálculo "categories"
const fetchGoogleSheetCategories = async () => {
  const rows = await fetchData(categoriesURL);

  // Resto del código para procesar los datos...
  const headers = rows[0];
  const dataObjects = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  // console.log(dataObjects);
  return dataObjects;
};

const fetchGoogleSheetRelationWorkCategory = async () => {
  const rows = await fetchData(workCategoryURL);

  // Resto del código para procesar los datos...
  const headers = rows[0];
  const dataObjects = rows.slice(1).map((row) => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
  // console.log(dataObjects);
  return dataObjects;
};

export {
  fetchGoogleSheetCustomers,
  fetchGoogleSheetData,
  fetchGoogleSheetCategories,
  fetchGoogleSheetRelationWorkCategory,
};
