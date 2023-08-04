// Layouts
// import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layout/MainLayout";
import AnonymousLayout from "../layout/AnonymousLayout";

// Pages
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
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
        component: HomePage,
        path: "/",
      },
      {
        name: "details",
        title: "Detalles",
        hasSiderLink: true,
        routes: [
          {
            name: "details-works",
            title: "Detalles de trabajos realizados",
            hasSiderLink: true,
            component: Details,
            path: "/details",
          },
        ],
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
