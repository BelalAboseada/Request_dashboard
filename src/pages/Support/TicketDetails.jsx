import { t } from "i18next";
import { BiSupport } from "react-icons/bi";

const TicketDetails = () => {
  return (
    <div className="TicketDetails p-2 lg:p-4">
      <div className="bg-white rounded-2xl p-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="col-span-1 flex flex-col gap-2">
            <span className="text-gray text-base font-medium">
              {t("users")}
            </span>
            <span className="text-base font-bold">Ahmed hassan</span>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <span className="text-gray text-base font-medium">
              {t("Phone number")}
            </span>
            <span className="text-base font-bold">999-999-999</span>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <span className="text-gray text-base font-medium">
              {t("Status")}
            </span>
            <span className="text-base font-bold text-yellow">In progress</span>
          </div>
          <div className="col-span-1 ">
            <span className="text-base font-medium text-gray">
              Nov 14, 2024 08:00
            </span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="grid grid-cols-4 gap-2">
          <div className="col-span-2 flex flex-col gap-2">
            <span className="text-gray text-base font-medium">
              {t("Ticket ID")}
            </span>
            <span className="text-base font-bold">1234</span>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <span className="text-gray text-base font-medium">
              {t("Assignee")}
            </span>
            <span className="text-base font-bold">Deanna Jones</span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col gap-2">
          <span className="text-gray text-base font-medium">
            {t("Subject")}
          </span>
          <span className="text-base font-medium">problem in upgrading</span>
        </div>
        <hr className="my-2" />
        <div className="bg-white shadow-md p-2 flex  flex-col rounded-lg">
          <span className="text-gray text-base font-medium">
            {t("Ticket Issue")}
          </span>
          <span className="text-base font-medium">
            I have a problem upgrading my account, please help
          </span>
          <img
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="Ticket Issue"
            className="w-28 h-28 md:w-36 md:h-36  lg:w-40 lg:h-40 object-cover rounded-lg mt-2"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center  gap-2 mt-2">
          <button className="bg-gray-100 text-base text-gray-dark  py-2 rounded-lg  w-full">
            {t(
              "Choose an assignee and set status to “In Progress” to add response."
            )}
          </button>
          <button className="bg-gray-100 text-base text-gray-dark  py-2  w-full rounded-lg ">
            {t("This ticket has been solved.")}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center  gap-2 mt-2">
          <button className="bg-gray-100 text-base text-gray-dark  py-2 rounded-lg  w-full">
            {t("This ticket is deferred.")}
          </button>
          <button className="bg-linear_1 text-base text-white py-2  w-full rounded-lg ">
            {t("Add Response")}
          </button>
        </div>

        <div
          className=" shadow-md p-2 relative flex  flex-col rounded-lg my-2"
          style={{
            background: "#CCABDA18",
          }}
        >
          <span className="text-gray-dark text-base font-bold flex  items-center gap-2">
            <BiSupport className="text-green w-6 h-6" />{" "}
            <span> Deanna Jones</span>
          </span>
          <span className="text-base font-medium">
            Have you tried turning your phone off and on again?{" "}
          </span>
          <img
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="Ticket Issue"
            className="w-28 h-28 md:w-36 md:h-36  lg:w-40 lg:h-40 object-cover rounded-lg mt-2"
          />
          <span className="absolute bottom-2 right-2">20:00</span>
        </div>
        <div className="bg-white shadow-md p-2 relative flex  flex-col rounded-lg my-2">
          <span className="text-gray-dark text-base font-bold flex  items-center gap-2">
            <span> Govlog</span>
          </span>
          <span className="text-base font-medium">This is user message</span>
          <img
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="Ticket Issue"
            className="w-28 h-28 md:w-36 md:h-36  lg:w-40 lg:h-40 object-cover rounded-lg mt-2"
          />
          <span className="absolute bottom-2 rtl:left-2 ltr:right-2">20:00</span>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;


