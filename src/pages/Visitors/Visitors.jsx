import { Progress } from "@material-tailwind/react";
import DurationOfVisits from "../../components/Charts/DurationOfVisits";
import MostVisitedGender from "../../components/Charts/MostVisitedGender";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { IoIosArrowForward } from "react-icons/io";
import ProgressList from "../../components/ProgressList/ProgressList";

// Reusable Components
const StatisticCard = ({ title, value, change, background }) => (
  <div
    className="col-span-1 flex flex-col rounded-2xl p-4"
    style={{ background }}
  >
    <span className="text-gray-dark font-bold text-lg">{value}</span>
    <p className="text-gray text-base font-medium">{title}</p>
    <span className="font-medium text-xs" style={{ color: "#4079ED" }}>
      {change}
    </span>
  </div>
);

const Visitors = () => {
const ageGroups = [
  { name: "18-24" },
  { name: "25-34" },
  { name: "35-44" },
  { name: "45-50" },
];
  const topCountries = [
    { name: "Saudi Arabia" },
    { name: "Egypt" },
    { name: "Sudan" },
    { name: "Jordan" },
    { name: "Yemen" },
    { name: "Turkey" },
  ];
  const topKeywords = [
    { name: "Real estate construction" },
    { name: "Development of real estate projects" },
    { name: "Construction management" },
    { name: "Building construction" },
    { name: "Architectural design" },
    { name: "Urban planning" },
    { name: "Construction projects" },
    { name: "Modern building techniques" },
    { name: "Building materials" },
    { name: "Building sustainability" },
  ];
 const TrafficSources = [
   { name: "search engines" },
   { name: "social networks" },
   { name: "marketing" },
   { name: "Another" },
 ];


  return (
    <div className="Visitors p-4 lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <StatisticCard
          title="Total visitors"
          value="200"
          change="+8% Last week"
          background="#E0F3FC"
        />
        <StatisticCard
          title="New visitors"
          value="50"
          change="+8% Last week"
          background="rgba(143, 234, 165, 0.22)"
        />
        <StatisticCard
          title="Returning visitors"
          value="20"
          change="+8% Last week"
          background="rgba(204, 171, 218, 0.23)"
        />
        <StatisticCard
          title="Bounce Rate"
          value="5%"
          change="+8% Last week"
          background="rgba(251, 151, 114, 0.35)"
        />
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-3 lg:col-span-4">
          <DurationOfVisits />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <MostVisitedGender />
        </div>
      </div>
      <section className="TopCountries bg-white p-6 my-4 rounded-3xl shadow-md">
        <header className="mb-4">
          <h3 className="text-lg font-bold">{t("Top 10 Countries")}</h3>
          <hr className="my-2" />
        </header>
        <ProgressList
          items={topCountries}
          valueFormatter={(item) =>
            `${Math.floor(Math.random() * 1000)} ${t("users")}`
          }
        />
        <footer className="mt-4 flex items-center justify-end">
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {t("seeAll")}
            <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
          </Link>
        </footer>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <header className="mb-4">
              <h3 className="text-lg font-bold">{t("the age")}</h3>
              <hr className="my-2" />
            </header>
            <ProgressList items={ageGroups} />
            <footer className="mt-4 flex items-center justify-end">
              <Link
                to="#"
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                {t("seeAll")}
                <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
              </Link>
            </footer>
          </div>
        </div>
        <div className="col-span-2">
          <div className="bg-white p-6 rounded-3xl shadow-md">
            <header className="mb-4">
              <h3 className="text-lg font-bold">{t("Traffic sources")}</h3>
              <hr className="my-2" />
            </header>
            <ProgressList items={TrafficSources} />
            <footer className="mt-4 flex items-center justify-end">
              <Link
                to="#"
                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                {t("seeAll")}
                <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
              </Link>
            </footer>
          </div>
        </div>
      </section>{" "}
      <section className="TopCountries bg-white p-6 my-4 rounded-3xl shadow-md">
        <header className="mb-4">
          <h3 className="text-lg font-bold">{t("Top 10 keywords")}</h3>
          <span>
            {t("The most common keywords that visitors use to search for you")}
          </span>
          <hr className="my-2" />
        </header>
        <ProgressList
          items={topKeywords}
          valueFormatter={(item) =>
            `${Math.floor(Math.random() * 1000)}`
          }
        />
        <footer className="mt-4 flex items-center justify-end">
          <Link
            to="#"
            className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            {t("seeAll")}
            <IoIosArrowForward className="ltr:rotate-0 rtl:rotate-180" />
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default Visitors;
