import { BiSupport } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { t } from "i18next";
import { Link } from "react-router-dom";


const Support = () => {
  return (
    <div className="Support flex flex-wrap items-center justify-center gap-4 p-6">
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="header flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-linear_1 flex  items-center justify-center">
              <IoTicket className="text-white w-6 h-6" />
            </span>
            <div>
              <h5 className="text-gray text-base font-medium">
                {t("Total Tickets")}
              </h5>
              <span className="text-gray-dark  text-2xl font-bold">2541</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">
              {t("Ticket List")}
            </div>
            <Link
              to={"/TotalTickets"}
              className="text-purple text-sm font-medium"
            >
              {t("View All")}
            </Link>
          </div>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <div>
                <div className="font-semibold text-gray-800">
                  Password Not Working
                </div>
                <div className="text-sm text-gray-500">Ahmed Hassan</div>
              </div>
              <div className="text-center">
                <div
                  className="mt-1 px-2 py-1 text-xs text-green  rounded-xl"
                  style={{
                    backgroundColor: "#EBF9F5",
                  }}
                >
                  OPEN
                </div>
                <div className="text-xs text-gray-400">Nov 14, 2024</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="header flex items-center gap-4">
            <span className="w-16 h-16 rounded-full bg-linear_1 flex  items-center justify-center">
              <BiSupport className="text-white w-8 h-8" />
            </span>
            <div>
              <h5 className="text-gray text-base font-medium">
                {t("Total Assignees")}
              </h5>
              <span className="text-gray-dark  text-2xl font-bold">24</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">
              {t("Assignee List")}
            </div>
            <a href="#" className="text-purple text-sm font-medium">
              {t("View All")}
            </a>
          </div>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <BiSupport className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Deanna Jones
                  </div>
                  <div className="text-sm text-gray-500">deanna@gmail.com</div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
                <CiEdit className="w-6 h-6 text-gray-dark" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
