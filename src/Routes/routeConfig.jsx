import Login from "../pages/auth/Login/Login";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";
import UserDetails from "../pages/Users/UserDetails";
import Users from "../pages/Users/Users";

// Define public routes
export const publicRoutes = [
  { path: "/LogIn", component: <Login /> },
];

// Define protected routes
export const protectedRoutes = [
  { path: "/", component: <Home /> },
  { path: "/Users", component: <Users /> },
  { path: "/User", component: <UserDetails /> },
  { path: "/Projects", component: <Projects /> },
];
