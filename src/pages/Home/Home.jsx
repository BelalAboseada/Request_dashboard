import { FaClipboardList } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { MdSpaceDashboard } from "react-icons/md";
import { HiDotsVertical, HiUserAdd } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { TbCashBanknoteFilled } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import PackageChart from "../../components/Charts/PackageChart";
import { t } from "i18next";
import { getCounters, getMostModels, getNewUsers } from "../../Services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProfileAvatar from "../../components/profilePic/profilePic";
import { format } from "date-fns";

const generateColor = (key) => {
  const colors = [
    "#0095FF",
    "#81D4C2",
    "#8744A4",
    "#FFB926",
    "#FC887B",
    "#30B0C7",
  ];
  return colors[key.length % colors.length];
};

const Home = () => {
  const [Models, setModels] = useState([]);
  const [NewUsers, setNewUsers] = useState([]);
  const [Counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [ModelsRes, NewUsersRes, CountersRes] = await Promise.all([
          getMostModels(),
          getNewUsers(),
          getCounters(),
        ]);

        const transformedData = Object.entries(ModelsRes.results).map(
          ([key, value]) => ({
            name: key.replace(/([A-Z])/g, " $1").trim(),
            popularity: `${value.percentage.toFixed(1)}%`,
            count: value.count,
            color: generateColor(key),
          })
        );
        const transformedCounters = Object.entries(CountersRes).map(
          ([key, value]) => ({
            value: key,
            name: value.name,
            count: value.count,
            color: generateColor(key),
            growth: value.growth,
          })
        );
        console.log(transformedCounters);

        setModels(transformedData);
        setNewUsers(NewUsersRes.results);
        setCounters(transformedCounters);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "yyyy-MM-dd");
  };
  return (
    <div className="Home p-4">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {Counters.map((count, idx) => (
          <div
            key={idx}
            className="col-span-1 rounded-2xl p-3 "
            style={{
              background: `${
                count.value === "users"
                  ? "rgba(250, 190, 90, 0.21)"
                  : count.value === "projects"
                  ? "rgba(252, 136, 123, 0.21)"
                  : count.value === "tickets"
                  ? "rgba(134, 227, 206, 0.2)"
                  : count.value === "tasks"
                  ? "rgba(0, 122, 255, 0.1)"
                  : count.value === "customers"
                  ? "rgba(204, 171, 218, 0.18)"
                  : ""
              }`,
            }}
          >
            <span className="">
              {count.value === "users" ? (
                <LuUsers2 className="w-10 h-10 text-white bg-yellow p-2 rounded-full " />
              ) : count.value === "projects" ? (
                <MdSpaceDashboard className="w-10 h-10 text-white bg-red p-2 rounded-full " />
              ) : count.value === "tickets" ? (
                <TbCashBanknoteFilled className="w-10 h-10 text-white bg-blue p-2 rounded-full " />
              ) : count.value === "tasks" ? (
                <FaClipboardList className="w-10 h-10 text-white  p-2 rounded-full bg-cyan-500" />
              ) : count.value === "customers" ? (
                <HiUserAdd className="w-10 h-10 text-white bg-purple p-2 rounded-full " />
              ) : (
                ""
              )}
            </span>
            <p className="font-semibold text-2xl my-2">{count.count}</p>
            <h5 className="text-gray my-2">{t(`${count.name}`)}</h5>
            <span
              style={{
                color: "#4079ED",
              }}
              className="mb-2"
            >
              +{count.growth} {t("LastWeek")}
            </span>
          </div>
        ))}
        {/* <div
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
        </div> */}
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
              {loading
                ? Array(6)
                    .fill()
                    .map((_, idx) => (
                      <tr key={idx}>
                        <td colSpan="3" className="text-center py-2">
                          <Skeleton height={20} baseColor="#F1F5F9" />
                        </td>
                      </tr>
                    ))
                : Models.map((model, idx) => (
                    <React.Fragment key={idx}>
                      <tr>
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
                      {idx < Models.length - 1 && (
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
              {/* <th className="p-2"></th> */}
            </tr>
          </thead>
          <tbody>
            {NewUsers.map((user, index) => (
              <tr key={index}>
                <td className="p-2">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <ProfileAvatar
                        profilePic={user.profilePic}
                        name={user.name}
                        alt={"User Avatar"}
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
                <td className="p-2">{user.userType}</td>
                <td className="p-2">{formatDate(user.createdAt)}</td>
                <td className="p-2">{user.plan.name}</td>
                {/* <td className="p-2">
                  <HiDotsVertical />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
