import UserRatios from "../../components/Charts/UserRatios";
import WeeklyOrderRateChart from "../../components/Charts/WeeklyOrderRateChart";
import World from "../../assets/images/World.png";
import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import WeeklyActivity from "../../components/Charts/WeeklyActivity";
import MonthlyRevenue from "../../components/Charts/MonthlyRevenue";
import { t } from "i18next";
import ProgressList from "../../components/ProgressList/ProgressList";

const Analysis = () => {
const Countries = [
  { name: "Saudi Arabia" },
  { name: "Egypt" },
  { name: "Jordan" },
  { name: "Yemen" },
  { name: "Turkey" },
];
  const models = [
    { name: "Architectural", color: "amber", value: 30 },
    { name: "electrical", color: "cyan", value: 70 },
    { name: "restoration", color: "orange", value: 50 },
    { name: "civilian", color: "", value: 30 },
    { name: "Safety and security", color: "lime", value: 60 },
  ];
  return (
    <div className="Analysis  p-2 lg:-p-4">
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-6 md:col-span-3 lg:col-span-4">
          <WeeklyOrderRateChart />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <UserRatios />
        </div>
      </div>
      <div className=" bg-white  p-4 my-2 rounded-3xl ">
        <h3 className="text-lg font-bold">{t("Audience Map Location")}</h3>
        <span className="text-gray  text-xs">{t("Report Center")}</span>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="col-span-2">
            <ProgressList
              items={Countries}
              valueFormatter={(item) =>
                `${Math.floor(Math.random() * 1000)} ${t("users")}`
              }
            />
          </div>
          <div className="col-span-2">
            <img src={World} alt="World" />
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-end m-1 p-1">
          <Link className="flex items-center gap-2 capitalize ">
            {t("seeAll")}
            <span>
              <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="col-span-2">
          <WeeklyActivity />
        </div>
        <div className="col-span-2">
          <MonthlyRevenue />
        </div>
      </div>

      <div className=" bg-white  p-4 my-2 rounded-3xl ">
        <h3 className="text-lg font-bold">{t("Audience Map Location")}</h3>
        <span className="text-gray  text-xs">{t("Report Center")}</span>
        <hr />

        <ProgressList items={models}  />

        <hr />
        <div className="flex items-center justify-end m-1 p-1">
          <Link className="flex items-center gap-2 capitalize ">
            {t("seeAll")}
            <span>
              <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
