/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  MdDriveFolderUpload,
  MdInbox,
  MdKeyboardDoubleArrowLeft,
  MdLogout,
  MdOutlinePayment,
  MdSpaceDashboard,
} from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaUser, FaUsers } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.scss";
import { t } from "i18next";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  const [Open, setOpen] = useState(false);
  const [OpenDialog, setOpenDialog] = useState(false);
  const [isProfileActive, setIsProfileActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const items = [
    {
      title: t("dashboard"),
      icon: <AiFillHome className="sidebar_icon" />,
      path: "/",
    },
    {
      title: t("users"),
      icon: <FaUsers className="sidebar_icon" />,
      path: "/Users",
    },
    {
      title: t("Projects"),
      icon: <MdSpaceDashboard className="sidebar_icon" />,
      path: "/Projects",
    },
    {
      title: t("analysis"),
      icon: <IoAnalyticsOutline className="sidebar_icon" />,
      path: "/wwj",
    },
    {
      title: t("account"),
      icon: <FaUser className="sidebar_icon" />,
      path: "/wwy",
    },
    {
      title: t("support"),
      icon: <BiSupport className="sidebar_icon" />,
      path: "/ggg",
    },
    {
      title: t("Team"),
      icon: <RiTeamFill className="sidebar_icon" />,
      path: "/gg",
    },
    {
      title: t("settings"),
      icon: <GiSettingsKnobs className="sidebar_icon" />,
      path: "/wws",
    },
  ];

  const handleProfileClick = () => {
    setIsProfileActive(!isProfileActive);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="Sidebar  rtl:left-0">
      <div
        className={` sidebar bg-white shadow-md  h-full py-5 pt-8 relative transition-custom duration-500 hidden lg:flex flex-col
        w-72
        `}
      >
       
        <div className={`flex gap-2 items-center profile py-6 px-5 `}>
          <Link
            to="/"
            state={{ tabIndex: 1 }}
            onClick={handleProfileClick}
            className="flex gap-2 items-center"
          >
            <div className="relative">
              <img
                src={logo}
                alt="avatar"
                className="rounded-full  w-12 h-12 object-contain relative  "
              />
            </div>
       
              <div className="flex flex-col">
                <span className="font-inter font-bold text-sm ">Request</span>
              </div>
           
          </Link>
        </div>
        <div
          className={`items w-full flex flex-col mt-5 gap-3 overflow-hidden`}
        >
          {items.map((item, index) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={() => handleItemClick(index)}
              className={`text-sm font-semibold font-inter text-gray transition-custom duration-custom flex items-center gap-3 py-5 px-5 ${
                index === activeIndex ? "item_sidebar" : ""
              }
              ${item.path === window.location.pathname ? "item_sidebar" : ""}
                 `}
            >
              <span
                className={`${index === activeIndex ? "icon" : ""}    ${
                  item.path === window.location.pathname ? "icon" : ""
                }`}
              >
                {item.icon}
              </span>
              <p > {item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
