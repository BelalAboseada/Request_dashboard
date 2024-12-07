import { FaClipboardList } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { HiDotsVertical, HiUserAdd } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { TbCashBanknoteFilled } from "react-icons/tb";
import React from "react";
import PackageChart from "../../components/Charts/PackageChart";
import { t } from "i18next";

const Home = () => {
  return (
    <div className="Home p-4">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <div
          className="col-span-1 rounded-2xl p-3 "
          style={{
            backgroundColor: "rgba(250, 190, 90, 0.21)",
          }}
        >
          <span className="">
            <LuUsers2 className="w-10 h-10 text-white bg-yellow p-2 rounded-full " />
          </span>
          <p className="font-semibold text-2xl my-2">30k</p>
          <h5 className="text-gray my-2">{t("totalUsers")}</h5>
          <span
            style={{
              color: "#4079ED",
            }}
            className="mb-2"
          >
            +8% {t("LastWeek")}
          </span>
        </div>
        <div
          className="col-span-1 rounded-2xl p-3 "
          style={{
            backgroundColor: "rgba(252, 136, 123, 0.21)",
          }}
        >
          <span className="  my-3">
            <MdSpaceDashboard className="w-10 h-10 text-white bg-red p-2 rounded-full " />
          </span>
          <p className="font-semibold text-2xl my-2">20k</p>
          <h5 className="text-gray my-2">{t("totalProjects")}</h5>
          <span
            style={{
              color: "#4079ED",
            }}
            className="mb-2"
          >
            +8% {t("LastWeek")}
          </span>
        </div>
        <div
          className="col-span-1 rounded-2xl p-3 "
          style={{
            backgroundColor: "rgba(0, 122, 255, 0.1)",
          }}
        >
          <span className="">
            <FaClipboardList className="w-10 h-10 text-white  p-2 rounded-full bg-cyan-500" />
          </span>
          <p className="font-semibold text-2xl my-2">10k</p>
          <h5 className="text-gray my-2">{t("totalTasks")}</h5>
          <span
            style={{
              color: "#4079ED",
            }}
            className="mb-2"
          >
            +8% {t("LastWeek")}
          </span>
        </div>
        <div
          className="col-span-1 rounded-2xl p-3 "
          style={{
            backgroundColor: "rgba(204, 171, 218, 0.18)",
          }}
        >
          <span className="">
            <HiUserAdd className="w-10 h-10 text-white bg-purple p-2 rounded-full " />
          </span>
          <p className="font-semibold text-2xl my-2">200</p>
          <h5 className="text-gray my-2">{t("NewCustomers")} </h5>
          <span
            style={{
              color: "#4079ED",
            }}
            className="mb-2"
          >
            +8% {t("LastWeek")}
          </span>
        </div>
        <div
          className="col-span-1 rounded-2xl p-3 "
          style={{
            backgroundColor: "rgba(134, 227, 206, 0.2)",
          }}
        >
          <span className="">
            <TbCashBanknoteFilled className="w-10 h-10 text-white bg-blue p-2 rounded-full " />
          </span>
          <p className="font-semibold text-2xl my-2">10</p>
          <h5 className="text-gray my-2">{t("totalTickets")}</h5>
          <span
            style={{
              color: "#4079ED",
            }}
            className="mb-2"
          >
            +8% {t("LastWeek")}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 my-3">
        <div className="col-span-3 card p-4 bg-white rounded-xl shadow-md">
          <h3
            className="text-lg font-bold mb-2"
            style={{
              color: "#05004E",
            }}
          >
            {t("Most Used Models")}
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="ltr:text-left rtl:text-right text-gray text-sm font-normal">
                  #
                </th>
                <th className="ltr:text-left rtl:text-right text-gray text-sm font-normal">
                  {t("UserName")}
                </th>
                <th className="text-right text-gray text-sm font-normal">
                  {t("Popularity")}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Approval of general",
                  popularity: "45%",
                  color: "#0095FF",
                },
                { name: "Table of", popularity: "43%", color: "#81D4C2" },
                { name: "Work", popularity: "18%", color: "#8744A4" },
                { name: "Approval of", popularity: "25%", color: "#FFB926" },
                {
                  name: "Request for Receipt of",
                  popularity: "24%",
                  color: "#FC887B",
                },
                {
                  name: "Material Inspection",
                  popularity: "25%",
                  color: "#30B0C7",
                },
              ].map((model, idx) => (
                <React.Fragment key={idx}>
                  <tr className="">
                    <td style={{ color: "#444A6D" }} className="py-2">
                      {idx + 1}
                    </td>
                    <td style={{ color: "#444A6D" }} className="py-2">
                      {model.name}
                    </td>
                    <td
                      style={{ color: "#444A6D" }}
                      className="text-right py-2"
                    >
                      <span
                        className="p-1 rounded-md"
                        style={{
                          color: model.color,
                          border: `1px solid ${model.color}`,
                        }}
                      >
                        {model.popularity}
                      </span>
                    </td>
                  </tr>
                  {idx < 5 && (
                    <tr>
                      <td colSpan="3">
                        <hr className="border-gray-200 my-1" />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <PackageChart />
      </div>
      <div className="card p-3 rounded-lg bg-white">
        {[
          {
            label: t("Total"),
            desc: t("The total number of visitors to the site."),
            value: "100",
            color: "#FFB926",
          },
          {
            label: t("new visitors"),
            desc: t(
              "The number of visitors who visit the site for the first time."
            ),
            value: "50",
            color: "#0095FF",
          },
          {
            label: t("returning visitors"),
            desc: t(
              "The number of visitors who returned to visit the site again."
            ),
            value: "20",
            color: "#8744A4",
          },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between ">
              <div>
                <h5
                  style={{
                    color: "#05004E",
                  }}
                >
                  {item.label}
                </h5>
                <p className="text-gray">{item.desc}</p>
              </div>
              <div className="py-2">
                <span
                  className="p-1 rounded-md"
                  style={{
                    color: item.color,
                    border: `1px solid ${item.color}`,
                  }}
                >
                  {item.value}
                </span>
              </div>
            </div>
            <hr className="border-gray-200 border border-solid my-1" />
          </div>
        ))}
        <div className=" flex items-center gap-2 justify-end">
          <p className="font-medium text-base">{t("seeAll")} </p>
          <span>
            <IoIosArrowForward className="rtl:rotate-180 ltr:rotate-0" />
          </span>
        </div>
      </div>

      <div className="card p-4 bg-white rounded-md shadow mt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{t("NewUsers")}</h3>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr
              className="ltr:text-left rtl:text-right "
              style={{
                background: "#F1F5F9",
              }}
            >
              <th className="p-2">{t("UserName")}</th>
              <th className="p-2">{t("type")}</th>
              <th className="p-2">{t("Registration Date")}</th>
              <th className="p-2">{t("Package")}</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill({
                name: "Ahmed Mohamed",
                email: "ahmed@example.com",
                type: "Owner",
                date: "Today",
                package: "Request",
              })
              .map((user, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <div className="avatar">
                        <img
                          src="https://via.placeholder.com/100.png"
                          alt="User Avatar"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p>{user.name}</p>
                        <span className="text-gray-400 text-xs">
                          {user.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">{user.type}</td>
                  <td className="p-2">{user.date}</td>
                  <td className="p-2">{user.package}</td>
                  <td className="p-2">
                    <HiDotsVertical />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
