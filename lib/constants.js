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
const workCategoryURL = shape_URL(baseURL, "works_categories", apiKey);

const content_layout = {
  navbar: {
    item: ["Inicio", "Trabajos", "Conocenos", "Contacto"],
    items: [
      {
        menu: "Inicio",
        url: "/",
      },
      {
        menu: "Trabajos",
        url: "/nuestros-trabajos/producto/todos",
      },
      {
        menu: "Conocenos",
        url: "/conocenos",
      },
      {
        menu: "Contacto",
        url: "/contactanos",
      },
    ],
  },
  heroDescription: {
    content:
      "Explora la cima de la personalización ilimitada, donde las ideas toman forma. Desde gorras vanguardistas hasta tazas que despiertan sonrisas, infundimos diseño excepcional en cada detalle. Nuestros buzos representan lo que buscás, mientras que las cartucheras banners y stickers capturan la esencia única de tus eventos. <br/> La <span className='font-bold'>impresión gráfica</span> es nuestro medio creativo, y nuestros diseñadores colaboran amigablemente. Cada creación refleja autenticidad y estilo. Con nosotros, redefine la personalización, un producto a la vez. Tu visión cobra vida con modernidad y frescura. Juntos, creamos magia en cada detalle, convirtiendo ideas en realidad.",
    spans: ["banners", "impresión gráfica", "stickers", "cartucheras"],
  },
  banner: {
    cards: [
      { text: "Nos contactás con tu idea", brief: "Idea" },

      { text: "Elaboramos una propuesta", brief: "Propuesta" },

      { text: "Aceptás o modificás detalles", brief: "Aceptación" },

      { text: "Producción", brief: "Producción" },

      { text: "Entrega de producto", brief: "Entrega" },
    ],
  },
};

export { categoriesURL, content_layout, typesURL, workCategoryURL, worksURL };
