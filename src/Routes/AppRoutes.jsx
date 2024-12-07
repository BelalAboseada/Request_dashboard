import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import { protectedRoutes, publicRoutes } from "./routeConfig";

const AppRoutes = () => (
  <Routes>
    {publicRoutes.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))}
    {protectedRoutes.map(({ path, component }) => (
      <Route
        key={path}
        path={path}
        element={component}
      />
    ))}
  </Routes>
);

export default AppRoutes;
