// Layouts
// import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layout/MainLayout";
import AnonymousLayout from "../layout/AnonymousLayout";

// Pages
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import MeetUs from "../pages/MeetUs";
import Home from "../pages/Home";
import { renderRoutes } from "./generate-routes";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login ADMIN",
        component: Login,
        path: "/login",
        isPublic: true,
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: Home,
        path: "/",
      },
      {
        name: "nuestros-productos",
        title: "Ver más detalles",
        hasSiderLink: true,
        routes: [
          {
            name: "details-works",
            title: "Nuestros productos realizados",
            hasSiderLink: true,
            component: Details,
            //path: "/nuestros-productos",
            routes: [
              {
                name: "categories",
                title: "Nuestros productos realizados",
                hasSiderLink: true,
                component: Details,
                path: "nuestros-productos/categoria/:id",
              },
              {
                name: "our-works",
                title: "Nuestros productos realizados",
                hasSiderLink: true,
                component: Details,
                path: "/nuestros-productos/producto/:id",
              },
            ],
            // {
            //   name: "details-works",
            //   title: "Nuestros productos realizados",
            //   hasSiderLink: true,
            //   component: Details,
            //   path: "/nuestros-productos/:id",
            //},
          },
        ],
      },
      {
        name: "contactanos",
        title: "Contactanos",
        hasSiderLink: true,

        routes: [
          {
            name: "contactanos",
            title: "Nuevo mensaje con referencia",
            hasSiderLink: true,
            component: Contact,
            path: "contactanos/:id",
          },
          {
            name: "contactanos",
            title: "Nuevo mensaje",
            hasSiderLink: true,
            component: Contact,
            path: "/contactanos",
          },
        ],
      },
      // {
      //   name: "contactanos",
      //   title: "Contactanos",
      //   component: Contact,
      //   path: "/contactanos&product=:id",
      // },
      {
        name: "about-us",
        title: "Conocenos",
        component: MeetUs,
        path: "/conocenos",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
