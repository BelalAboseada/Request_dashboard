import { MdNotificationsNone } from "react-icons/md";
import avatar from "../../assets/images/avatar.png";
import { IoSearch } from "react-icons/io5";
import "./style.scss";
import {  useState } from "react";
// import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { t } from "i18next";
// import { IoIosWarning } from "react-icons/io";
// import { TbRosetteDiscountCheck } from "react-icons/tb";
// import { PiHeadset } from "react-icons/pi";
const Header = () => {
  // const user = useSelector((state) => state.auth.user);

  const [isOpen, setIsOpen] = useState(false);
  // const [isLangOpen, setIsLangOpen] = useState(false);
  // const [isRTL, setIsRTL] = useState(false);
  // const { t, i18n } = useTranslation(); 
  const toggleNonfiction = () => {
    setIsOpen(!isOpen);
  };
  // const notifications = [
  //   {
  //     id: 1,
  //     icon: <TbRosetteDiscountCheck className="Notification_success" />,
  //     message:
  //       "Your package has been successfully upgraded to the higher package",
  //     timestamp: "12:21 PM 23-8-2024",
  //     showButtons: false,
  //   },
  //   {
  //     id: 2,
  //     icon: <IoIosWarning className="Notification_warning" />,
  //     message: "You have reached the maximum limit for applying to projects...",
  //     timestamp: "12:21 PM 23-8-2024",
  //     showButtons: true,
  //   },
  //   {
  //     id: 3,
  //     icon: <PiHeadset className="Notification_3" />,
  //     message: "Your complaint has been successfully submitted to support...",
  //     timestamp: "12:21 PM 23-8-2024",
  //     showButtons: false,
  //   },
  //   {
  //     id: 4,
  //     icon: <IoIosWarning className="Notification_warning" />,
  //     message: "You have reached the maximum limit for applying to projects...",
  //     timestamp: "12:21 PM 23-8-2024",
  //     showButtons: true,
  //   },
  //   {
  //     id: 5,
  //     icon: <TbRosetteDiscountCheck className="Notification_success" />,
  //     message:
  //       "Your package has been successfully upgraded to the higher package",
  //     timestamp: "12:21 PM 23-8-2024",
  //     showButtons: false,
  //   },
  // ];

  // useEffect(() => {
  //   const lang = i18n.language || "en";
  //   setIsRTL(lang === "ar");
  //   document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  // }, [i18n.language]);

  return (
    <div className="Header bg-white border border-light">
      <header className="flex justify-between align-center p-3">
        <div className="">
          <h5 className="text-linear text-xl font-extrabold flex items-center">
            {t("dashboard")}
          </h5>
        </div>
        <div className="search relative">
          <input
            type="text"
            placeholder={t("search")}
            className="search w-full text-sm text-gray border rounded-md  border-purple placeholder:text-purple"
          />
          <span className="absolute top-3 ltr:right-16 rtl:left-16 flex items-center gap-2 text-gray ">
            <IoSearch className=" w-[17px] h-[17px] text-purple" />
          </span>
        </div>
        <div className="flex justify-between items-center">
          {/* {user.notifications && ( */}
          <div className="flex items-center  gap-3">
            <div className="notifications">
              <button
                onClick={toggleNonfiction}
                className="rounded-full p-2 relative"
                style={{
                  background: "#CCABDA18",
                }}
              >
                <MdNotificationsNone className=" w-[34px] h-[34px] text-purple " />
                <span className="bg-purple w-[10px] h-[10px]  absolute rounded-full  top-3 ltr:right-3 rtl:left-3 "></span>
              </button>
              <div
                className={`notification-dropdown ${
                  isOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                } absolute ltr:right-3 top-12 rtl:left-3 w-[600px] h-[300px] overflow-y-scroll  border border-gray bg-white shadow-lg rounded-md p-2 mt-3 transition-all duration-300 z-50`}
                onMouseLeave={() => setIsOpen(false)}
              >
                <div className="flex justify-between items-center mx-2">
                  <span className="text-purple-dark text-base font-bold">
                    {t("New for you")}
                  </span>
                  <Link
                    to="/"
                    className="text-gray underline underline-offset-1 text-sm font-normal"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("Make All Read")}
                  </Link>
                </div>

                {/* {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  icon={notification.icon}
                  message={notification.message}
                  timestamp={notification.timestamp}
                  showButtons={notification.showButtons}
                />
              ))} */}
              </div>
            </div>
            <Link to={"/Account"} className="user">
              <img
                src={avatar}
                alt="logo"
                className="w-[48px] h-[48 px] rounded-full border-2 border-gray-light"
              />
            </Link>
          </div>
          {/* )}  */}
          <div className="footer"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
