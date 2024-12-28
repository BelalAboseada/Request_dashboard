import { t } from "i18next";
import TicketsBoardView from "../../components/boardView/TicketsBoardView";
import { TbFilterPlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const TotalTickets = () => {
  return (
    <div className="TotalTickets p-2 lg:p-4">
      <div className="bg-white p-4 flex items-center justify-between rounded-3xl">
        <div className="flex items-center gap-2">
          <p className="text-xs md:text-sm">{t("Total Tickets")}:</p>
          <p className="text-base font-bold">8 {t("Ticket")}</p>
        </div>
        <button className="px-4 py-1 border border-gray border-solid rounded-2xl flex items-center gap-2">
          <span className="text-gray-dark font-medium text-base  ">
            {t("Filter")}{" "}
          </span>
          <span>
            <TbFilterPlus className="text-gray  w-5 h-5" />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4 gap-2 mt-4">
        {[...Array(8)].map((_, index) => (
          <Link key={index} to={`/TicketDetails/${index +1}`}>
            <TicketsBoardView
              status={"open"}
              title={`Ticket ${index + 1}`}
              UserName={"User Name"}
              Submitted={"Nov 22, 2022"}
              Priority={"Priority"}
              TicketID={`Ticket ID ${index + 1}`}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center  mt-8">
        <button className="px-8 py-2 bg-white text-gray font-bold border border-gray border-solid rounded-3xl">
          {t("load more")}
        </button>
      </div>
    </div>
  );
};

export default TotalTickets;
