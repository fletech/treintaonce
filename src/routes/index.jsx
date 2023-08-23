// Layouts
// import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layout/MainLayout";
import AnonymousLayout from "../layout/AnonymousLayout";

// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import Details from "../pages/Details";
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
        name: "nuestros-trabajos",
        title: "Ver más detalles",
        hasSiderLink: true,
        routes: [
          {
            name: "details-works",
            title: "Nuestros trabajos realizados",
            hasSiderLink: true,
            component: Details,
            //path: "/nuestros-trabajos",
            routes: [
              {
                name: "categories",
                title: "Nuestros trabajos realizados",
                hasSiderLink: true,
                component: Details,
                path: "nuestros-trabajos/categoria/:id",
              },
              {
                name: "our-works",
                title: "Nuestros trabajos realizados",
                hasSiderLink: true,
                component: Details,
                path: "/nuestros-trabajos/producto/:id",
              },
            ],
            // {
            //   name: "details-works",
            //   title: "Nuestros trabajos realizados",
            //   hasSiderLink: true,
            //   component: Details,
            //   path: "/nuestros-trabajos/:id",
            //},
          },
        ],
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
