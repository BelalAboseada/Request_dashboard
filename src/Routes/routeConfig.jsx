import { Navigate } from "react-router-dom";
import Account from "../pages/Account/Account";
import Analysis from "../pages/analysis/Analysis";
import Login from "../pages/auth/Login/Login";
import Home from "../pages/Home/Home";
import ProjectDetails from "../pages/Projects/projectDetails";
import Projects from "../pages/Projects/Projects";
import Setting from "../pages/Setting/Setting";
import Support from "../pages/Support/Support";
import TicketDetails from "../pages/Support/TicketDetails";
import TotalTickets from "../pages/Support/TotalTickets";
import Tasks from "../pages/Tasks/Tasks";
import Team from "../pages/Team/Team";
import UserDetails from "../pages/Users/UserDetails";
import Users from "../pages/Users/Users";
import Visitors from "../pages/Visitors/Visitors";
import Page404 from "../pages/404Page/page404";

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
  { path: "/Account", component: <Account /> },
  { path: "/Support", component: <Support /> },
  { path: "/TotalTickets", component: <TotalTickets /> },
  { path: "/TicketDetails/:id", component: <TicketDetails /> },
  { path: "/Team", component: <Team /> },
  { path: "/Setting", component: <Setting /> },
  {
    path: "*",
    component: <Navigate to="/404" replace />,
  },
  { path: "/404", component: <Page404 /> },
];
