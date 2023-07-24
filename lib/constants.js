const shape_URL = (base, string, key) => `${base}${string}?key=${key}`;

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const baseURL =
  "https://sheets.googleapis.com/v4/spreadsheets/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/values/";

// URL para obtener los datos de la hoja de cálculo "works"
const worksURL = shape_URL(baseURL, "works", apiKey);

// URL para obtener los datos de la hoja de cálculo "categories"
const categoriesURL = shape_URL(baseURL, "categories", apiKey);

// URL para obtener los datos de la hoja de cálculo "types"
const typesURL = shape_URL(baseURL, "types", apiKey);

export { worksURL, categoriesURL, typesURL };
