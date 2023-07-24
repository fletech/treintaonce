const apiKey = "AIzaSyDBqmpoRiOuQPeegck-X2G0OvAAYSoUFFo";

// URL para obtener los datos de la hoja de cálculo "works"
const worksURL = `https://sheets.googleapis.com/v4/spreadsheets/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/values/works?key=${apiKey}`;

// URL para obtener los datos de la hoja de cálculo "categories"
const categoriesURL = `https://sheets.googleapis.com/v4/spreadsheets/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/values/categories?key=${apiKey}`;

// URL para obtener los datos de la hoja de cálculo "types"
const typesURL = `https://sheets.googleapis.com/v4/spreadsheets/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/values/types?key=${apiKey}`;

export { worksURL, categoriesURL, typesURL };
