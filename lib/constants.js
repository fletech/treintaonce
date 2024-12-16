const shape_URL = (base, string, key) => `${base}${string}?key=${key}`;

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const baseURL =
  "https://sheets.googleapis.com/v4/spreadsheets/1WD759KVPdpWVdAQMEfxiT0wpbWBHrYZbDF2zMXyrxJI/";

// URL para obtener los datos de la hoja de cálculo "works"
const worksURL = shape_URL(baseURL, "values/works", apiKey);

// URL para obtener los datos de la hoja de cálculo "categories"
const categoriesURL = shape_URL(baseURL, "values/categories", apiKey);

const customersURL = shape_URL(baseURL, "values/customers", apiKey);
// URL para obtener los datos de la hoja de cálculo "types"
const typesURL = shape_URL(baseURL, "values/types", apiKey);
const workCategoryURL = shape_URL(baseURL, "values/works_categories", apiKey);

const content_layout = {
  navbar: {
    item: ["Inicio", "Productos", "Conocenos", "Contacto"],
    items: [
      {
        menu: "Inicio",
        url: "/",
      },
      {
        menu: "Productos",
        url: "/nuestros-productos/categoria/todos",
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
      { text: "Nos contactás con tu idea", brief: "Idea", contact: true },

      { text: "Elaboramos una propuesta", brief: "Propuesta" },

      { text: "Aceptás o modificás detalles", brief: "Aceptación" },

      { text: "Manos a la obra", brief: "Producción" },

      { text: "Entrega de producto", brief: "Entrega" },
    ],
  },
  meetUs: {
    members: [
      {
        name: "Silvina Camuzzi",
        position: "Administracion",
        image: "/assets/silvina.png",
        imagePosition: "object-top",
      },
      {
        name: "Juan Perego",
        position: "Diseñador gráfico",
        image: "/assets/juan.png",
        imagePosition: "object-top",
      },
      {
        name: "Francisco Perego",
        position: "Encargado de Taller",
        image: "/assets/fran.png",
        imagePosition: "object-center",
      },
      {
        name: "Álvaro Perego",
        position: "Comercial",
        image: "/assets/alvaro.png",
        imagePosition: "object-top",
      },
    ],
    description:
      "Enfocados en el detalle y la atención personalizada. Nuestro objetivo es brindar un servicio de excelencia, con productos de calidad y un trato amigable. Siempre dispuestos a escuchar tus ideas y hacerlas realidad, para crear productos con los que te identifiques.",
  },
};

export {
  baseURL,
  apiKey,
  categoriesURL,
  content_layout,
  customersURL,
  typesURL,
  workCategoryURL,
  worksURL,
};
