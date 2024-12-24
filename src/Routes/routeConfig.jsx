import Analysis from "../pages/analysis/Analysis";
import Login from "../pages/auth/Login/Login";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/projectDetails";
import Projects from "../pages/Projects/Projects";
import Tasks from "../pages/Tasks/Tasks";
import UserDetails from "../pages/Users/UserDetails";
import Users from "../pages/Users/Users";
import Visitors from "../pages/Visitors/Visitors";

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
  { path: "/Project", component: <ProjectDetails /> },
  { path: "/AllTasks", component: <Tasks /> },
  { path: "/Analysis", component: <Analysis /> },
  { path: "/Visitors", component: <Visitors /> },
];
