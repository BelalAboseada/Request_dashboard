import { BiSupport } from "react-icons/bi";
import { IoTicket } from "react-icons/io5";

const Support = () => {
  return (
    <div className="Support p-2 lg:p-4 h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="col-span-1 bg-white rounded-lg shadow-md p-2">
          <div className="header flex items-center gap-4">
            <span className="w-16 h-16 rounded-full bg-linear_1 flex  items-center justify-center">
              <IoTicket className="text-white w-8 h-8" />
            </span>
            <div>
              <h5 className="text-gray text-base font-medium">Total Tickets</h5>
              <span className="text-gray-dark  text-2xl font-bold">2541</span>
            </div>
          </div>
          <hr className="my-2" />
          <div className="body mt-4">
            <div className="flex items-center justify-between ">
              <h4>Ticket List</h4>
              <span className="text-purple  text-base font-medium ">view all </span>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-lg shadow-md p-2">
          <div className="header flex items-center gap-2">
            <span className="w-16 h-16 rounded-full bg-linear_1 flex  items-center justify-center">
              <BiSupport className="text-white w-8 h-8" />
            </span>
            <div>
              <h5 className="text-gray text-base font-medium">
                Total Assignees
              </h5>
              <span className="text-gray-dark  text-2xl font-bold">24</span>
            </div>
          </div>
          <hr className="my-2" />
        </div>
      </div>
    </div>
  );
};

export default Support;


