import { t } from "i18next";
import { IoTicket } from "react-icons/io5";

const TicketsBoardView = ({
  status,
  title,
  UserName,
  Submitted,
  Priority,
  TicketID,
}) => {
  return (
    <div className="TicketsBoardView bg-white rounded-xl p-4 col-span-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-full bg-linear_1 flex  items-center justify-center">
            <IoTicket className="text-white w-6 h-6" />
          </span>
          <h4 className="text-lg font-bold">{title}</h4>
        </div>
        <span
          className="mt-1 px-2 py-1 text-xs text-green  rounded-xl"
          style={{
            backgroundColor: "#EBF9F5",
          }}
        >
          {status}
        </span>
      </div>
      <hr className="my-2" />
      <div className="grid grid-cols-2 gap-1 my-1">
        <div className="col-span-1 flex flex-col  items-start">
          <span className="text-gray text-base font-medium">{t("users")}</span>
          <span className="text-base font-bold">{UserName}</span>
        </div>
        <div className="col-span-1 flex flex-col  items-start">
          <span className="text-gray text-base font-medium">
            {t("Submitted")}
          </span>
          <span className="text-base font-bold">{Submitted}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 my-1">
        <div className="col-span-1 flex flex-col  items-start">
          <span className="text-gray text-base font-medium">
            {t("Priority")}
          </span>
          <span className="text-base font-bold">{Priority}</span>
        </div>
        <div className="col-span-1 flex flex-col  items-start">
          <span className="text-gray text-base font-medium">
            {t("Ticket ID")}
          </span>
          <span className="text-base font-bold">{TicketID}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketsBoardView