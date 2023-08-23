import flattenDeep from "lodash/flattenDeep";

import { Route, Routes as ReactRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { AnimatePresence } from "framer-motion";

const generateFlattenRoutes = (routes) => {
  if (!routes) return [];
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  );
};

export const renderRoutes = (mainRoutes) => {
  const Routes = ({ isAuthorized }) => {
    const layouts = mainRoutes.map(({ layout: Layout, routes }, index) => {
      const subRoutes = generateFlattenRoutes(routes);

      return (
        <Route key={index} element={<Layout />}>
          <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
            {subRoutes.map(({ component: Component, path, name }) => {
              return (
                Component &&
                path && <Route key={name} element={<Component />} path={path} />
              );
            })}
          </Route>
        </Route>
      );
    });

    return (
      <AnimatePresence mode="wait">
        <ReactRoutes>{layouts}</ReactRoutes>
      </AnimatePresence>
    );
  };
  return Routes;
};
