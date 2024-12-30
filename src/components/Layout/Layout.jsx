// import { useLocation } from "react-router-dom";
// import Sidebar from "../SideBar/Sidebar";
// import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import useAuthRedirect from "../../hooks/useAuthRedirect";
import AppRoutes from "../../Routes/AppRoutes";
import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  // useAuthRedirect();
  const options = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const noSidebarRoutes = ["/LogIn","*", "/404"];

  const showSidebar = !noSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      {showSidebar && <Header className="w-full" />}
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}

        <main className={`flex-1  `}>
          <AppRoutes />
        </main>
      </div>
      <ToastContainer options={options} stacked />
    </div>
  );
};

export default Layout;
