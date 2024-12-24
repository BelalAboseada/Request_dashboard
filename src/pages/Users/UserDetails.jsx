import { t } from "i18next";
import avatar from "../../assets/images/avatar.png";
import UiInput from "../../components/UI/Input/UIInput";
import Datepicker from "react-tailwindcss-datepicker";
import {  Progress } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoInformationCircleOutline, IoTrendingDownOutline, IoTrendingUpOutline } from "react-icons/io5";
import masterCard from "../../assets/images/MasterCard.png"
import { MdDelete, MdOutlineMoreHoriz } from "react-icons/md";

const UserDetails = () => {


     const chart = {
       series: [44, 55, 67],
       chart: {
         height: 50,
         type: "radialBar",
       },
       plotOptions: {
         radialBar: {
           offsetY: 0,
           startAngle: -180,
           endAngle: 90,
           hollow: {
             margin: 5,
             size: "50%",
             background: "transparent",
             image: undefined,
           },
           dataLabels: {
             name: {
               fontSize: "16px",
             },
             value: {
               fontSize: "16px",
             },
             total: {
               show: false,
             },
           },
           rounded: true,
         },
       },
       labels: ["Completed", "In-Progress", "Delayed"],
       colors: ["#81D4C2", "#FFB926", "#FF5630"],
     };
  // Date formatting function
  //   const formatDate = (date) => {
  //     if (!date) return "";
  //     const d = new Date(date);
  //     const year = d.getFullYear();
  //     const month = String(d.getMonth() + 1).padStart(2, "0");
  //     const day = String(d.getDate()).padStart(2, "0");
  //     return `${year}-${month}-${day}`;
  //   };
  return (
    <div className="UserDetails p-4">
      <div className="userDetails bg-white  rounded-2xl shadow-md p-2">
        <div className="flex items-center justify-between p-2 border-b border-solid border-gray-100">
          <div className="relative after:content-[''] after:absolute after:bg-purple after:rounded-t-md  after:h-1 after:w-full after:left-0 after:-bottom-2">
            <span className="text-purple font-medium  text-lg">
              {t("userDetails")}
            </span>
          </div>
          <div className="flex  items-center  gap-2">
            <button className="bg-yellow text-white font-medium px-4 py-2 rounded-lg">
              {t("StopTheUser")}
            </button>
            <button className="bg-red text-white px-4 py-2 rounded-lg">
              {t("Delete")}
            </button>
          </div>
        </div>
        <div className="form grid grid-cols-3 lg:grid-cols-7 gap-4 my-3">
          <div className="col-span-1 avatar">
            <img
              className="object-cover w-20 h-20 rounded-full"
              src={avatar}
              alt=""
            />
          </div>
          <div className="col-span-3">
            <UiInput
              type="text"
              id="name"
              label={t("UserName")}
              value={"Name"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <UiInput
              type="text"
              id="Email"
              label={t("Email")}
              value={"Email"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder={t("Email")}
            />
            <UiInput
              type="text"
              id="role"
              label={t("role")}
              value={"role"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="role"
            />
            <UiInput
              type="text"
              id="PhoneNumber"
              label={t("PhoneNumber")}
              value={"PhoneNumber"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="PhoneNumber"
            />
          </div>
          <div className="col-span-3">
            <UiInput
              type="text"
              id="Address"
              label={t("Address")}
              value={"Address"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="Address"
            />
            <UiInput
              type="text"
              id="City"
              label={t("City")}
              value={"City"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="City"
            />
            <UiInput
              type="text"
              id="Country"
              label={t("Country")}
              value={"Country"}
              //   onChange={(e) => setName(e.target.value)}
              placeholder="Country"
            />
            <div>
              <label
                htmlFor="dob"
                className="text-sm font-medium text-gray-700 flex justify-start"
              >
                {t("dob")}
              </label>
              <Datepicker
                useRange={false}
                asSingle={true}
                value={"22-10-2000"}
                // placeholder={formatDate(user.dateOfBirth)}
                primaryColor={"purple"}
                popoverDirection="up"
                toggleClassName="text-yellow absolute top-3 ltr:right-4 rtl:left-4"
                inputClassName="Input_UI p-2 border border-gray-300 rounded-xl w-full"
                // onChange={(e) => setDob(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-3 bg-white  rounded-2xl shadow-md p-4">
        <div className="activeProjects col-span-2">
          <p className="font-medium text-base">{t("ActiveProjects")}</p>
          <table className="w-full table-auto bg-white rounded-2xl overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="border-b font-medium text-sm p-1 md:p-2">
                  {t("Project Name")}
                </th>
                <th className="border-b font-medium text-sm p-1 md:p-2">
                  {t("Tasks")}
                </th>
                <th className="border-b font-medium text-sm p-1 md:p-2">
                  {t("Progress")}
                </th>
                <th className="border-b font-medium text-sm p-1 md:p-2">
                  {t("Members")}
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <tr key={idx} className="hover:bg-gray-100">
                    <td className="p-1 md:p-2 text-xs md:text-base">
                      Project Name {idx + 1}
                    </td>
                    <td className="p-1 md:p-2">
                      134 <span className="hidden md:block">{t("Task")}</span>
                    </td>
                    <td className="p-1 md:p-2 flex items-center gap-1">
                      <span className="font-inter  text-xs text-gray-dark ">
                        15%
                      </span>
                      <Progress
                        value={70}
                        color="purple"
                        size="sm"
                        className="w-full"
                        barProps={{
                          style: {
                            height: "5px",
                            backgroundColor: "var(--purple)",
                          },
                        }}
                        style={{
                          backgroundColor: "#e0e0e0",
                          borderRadius: "5px",
                        }}
                      />
                    </td>
                    <td className="p-1 md:p-2">
                      <div className="flex -space-x-2">
                        {Array(3)
                          .fill(0)
                          .map((_, i) => (
                            <img
                              key={i}
                              src={`https://i.pravatar.cc/40?img=${i}`}
                              alt="member"
                              className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-white"
                            />
                          ))}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg col-span-2">
          <h3 className="font-semibold mb-2">{t("ProjectsPerformance")}</h3>
          <div className="flex flex-col">
            <Chart
              options={chart}
              series={chart.series}
              type="radialBar"
              height={180}
            />
            <div className="flex items-center justify-center gap-5 mt-2">
              <div className="Completed flex flex-col items-center">
                <span>
                  <IoMdCheckmarkCircleOutline
                    className="w-5 h-5"
                    style={{
                      color: "#81D4C2",
                    }}
                  />
                </span>
                <span className="font-semibold text-lg">44%</span>
                <span className="font-medium text-base">{t("Completed")}</span>
              </div>
              <div className="In-Progress flex flex-col items-center">
                <span>
                  <IoTrendingUpOutline
                    className="w-5 h-5"
                    style={{
                      color: "#FFB926",
                    }}
                  />
                </span>
                <span className="font-semibold text-lg">55%</span>
                <span className="font-medium text-base">{t("inProgress")}</span>
              </div>
              <div className="Delayed flex flex-col items-center">
                <span>
                  <IoTrendingDownOutline
                    className="w-5 h-5"
                    style={{
                      color: "#FF5630",
                    }}
                  />
                </span>
                <span className="font-semibold text-lg">67%</span>
                <span className="font-medium text-base">{t("delayed")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-2">
        <div className="border border-solid  border-purple p-2 rounded-2xl">
          <div className="flex items-center flex-col md:flex-row md:justify-between mt-5 mx-2">
            <div className="content">
              <h6
                style={{
                  color: "#919EAB",
                }}
                className="text-xs my-1"
              >
                {t("Current Plan")}
              </h6>
              <h1 className="font-bold text-2xl my-1">
                {t("Starter - ")} Jan 2024
              </h1>
              <p className="text-gray-md  font-medium text-sm my-1">
                {t("You enjoy the benefits of the Request package.")}
              </p>
              <p className="flex items-center gap-2 font-medium text-sm text-gray my-1">
                <span>
                  <IoInformationCircleOutline />
                </span>
                {t("Next Payment:")} <span className="text-purple">$8 USD</span>{" "}
                {t("on")} <span className="text-gray-dark">Feb 1, 2024</span>
              </p>
            </div>
            <div className="flex flex-col">
              <h6
                style={{
                  color: "#919EAB",
                }}
                className="text-xs font-bold  my-3"
              >
                {t("Yearly Payment")}
              </h6>
              <span className="Price text-purple font-bold text-3xl">
                $8 USD
              </span>
              <p className="underline underline-offset-1 text-gray  font-medium  text-xs">
                {t(`Learn more about our membership policy.`)}
              </p>
            </div>
          </div>
          <hr className="bg-gray my-2" />
          <div className="flex items-center justify-between mx-3">
            <p className="font-medium  text-sm">
              Notification before the package expires
            </p>
            <span className="text-purple font-bold text-base ">7 Days</span>
          </div>
          <hr className="bg-gray my-2" />
          <div className="payment flex items-center justify-between mx-2">
            <div className="flex flex-col">
              <h2 className="text-xs my-1" style={{ color: "#919EAB" }}>
                {t("Payment method")}
              </h2>
              <div className="flex items-center gap-2">
                <img src={masterCard} alt="masterCard" className="w-16 " />
                <span className="font-bold text-xl">***8773</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-2">
          <h4 className="font-medium text-base">
            {t("Credit or debit cards")}
          </h4>
          <p className="text-xs font-normal" style={{ color: "#637381" }}>
            {t(
              "The card will be charged monthly for resources used. All major credit/debit cards are accepted."
            )}
          </p>

          {/* Existing Cards Section */}
          <div className="bg-white border border-purple rounded-2xl p-6 mt-4 mb-8">
            {[{ expired: false }, { expired: true }].map((card, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b "
              >
                <div className="flex items-center gap-4">
                  <img src={masterCard} alt="MasterCard" className="w-12" />
                  <div>
                    <p className="font-bold">
                      Ahmed Hassan{" "}
                      <span style={{ color: "#637381" }}>xxxx-1234</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("Expires")} 10/202{index + 4} • {t("Updated on")} 12
                      Jan 2021
                    </p>
                  </div>
                </div>
                <span
                  className={`${
                    card.expired ? "bg-red" : "bg-purple-dark"
                  } text-white text-xs px-2 py-1 rounded`}
                >
                  {card.expired ? t("Expired") : t("Default")}
                </span>
                <MdOutlineMoreHoriz className="text-gray-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md p-4 rounded-2xl my-2">
        <h5 className="font-medium text-base ">The Team</h5>
        <p className="font-normal text-xs">
          The card will be charged monthly for resources used.
        </p>
        <div className="DelegatedAccess bg-white rounded-3xl m-2 p-4 hidden lg:block">
          <table className="w-full text-sm text-center text-gray-500 border-collapse">
            <thead className="text-xs font-bold text-gray-dark uppercase border-b-2 border-gray">
              <tr>
                <th className="px-4 py-2">{t("Name")}</th>
                <th className="px-4 py-2">{t("Vocation")}</th>
                <th className="px-4 py-2">{t("Email")}</th>
                <th className="px-4 py-2">{t("Phone number")}</th>
                <th className="px-4 py-2">{t("Access")}</th>
                <th className="px-4 py-2">{t("Actions")}</th>
              </tr>
            </thead>
            <tbody>
              {/* {ownerTeam.length > 0 && ( */}
              <h4 className=" my-1"> team name (project name)</h4>
              {/* )} */}
              {/* {ownerTeam.map((member) => ( */}
              {/* <> */}
              <tr className="shadow-md p-2 rounded-lg">
                <td className="text-left py-2 px-4 font-medium text-gray-dark">
                  name
                </td>
                <td className="px-4 py-2">vocation name</td>
                <td
                  className="px-4 py-2 "
                  style={{
                    color: "#5BA6FF",
                  }}
                >
                  email@gmail.com
                </td>
                <td
                  className="px-4 py-2 text-green"
                  style={{
                    color: "#34C759",
                  }}
                >
                  010060055555
                </td>
                <td className="px-4 py-2">access</td>
                <td className="px-4 py-2 flex justify-center gap-3">
                  <button
                    className="text-red"
                    // onClick={() => {
                    //   setSelectedUserId(member._id);
                    //   handleOpen();
                    // }}
                  >
                    <MdDelete className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              {/* </> */}
              {/* ))} */}
              {/* {consultantTeam.length > 0 && ( */}
              <h4 className=" my-1"> team name (project name)</h4> {/* )} */}
              {/* {consultantTeam.map((member) => ( */}
              {/* <> */}
              <tr className="shadow-md p-2 rounded-lg">
                <td className="text-left py-2 px-4 font-medium text-gray-dark">
                  name
                </td>
                <td className="px-4 py-2">vocation name</td>
                <td
                  className="px-4 py-2 "
                  style={{
                    color: "#5BA6FF",
                  }}
                >
                  email@gmail.com
                </td>
                <td
                  className="px-4 py-2 text-green"
                  style={{
                    color: "#34C759",
                  }}
                >
                  010060055555
                </td>
                <td className="px-4 py-2">access</td>
                <td className="px-4 py-2 flex justify-center gap-3">
                  <button
                    className="text-red"
                    // onClick={() => {
                    //   setSelectedUserId(member._id);
                    //   handleOpen();
                    // }}
                  >
                    <MdDelete className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              {/* </> */}
              {/* ))} */}
              {/* {constractorTeam.length > 0 && ( */}
              <h4 className=" my-1"> team name (project name)</h4> {/* )} */}
              {/* {constractorTeam.map((member) => (
                <> */}
              <tr className="shadow-md p-2 rounded-lg">
                <td className="text-left py-2 px-4 font-medium text-gray-dark">
                  name
                </td>
                <td className="px-4 py-2">vocation name</td>
                <td
                  className="px-4 py-2 "
                  style={{
                    color: "#5BA6FF",
                  }}
                >
                  email@gmail.com
                </td>
                <td
                  className="px-4 py-2 text-green"
                  style={{
                    color: "#34C759",
                  }}
                >
                  010060055555
                </td>
                <td className="px-4 py-2">access</td>
                <td className="px-4 py-2 flex justify-center gap-3">
                  <button
                    className="text-red"
                    // onClick={() => {
                    //   setSelectedUserId(member._id);
                    //   handleOpen();
                    // }}
                  >
                    <MdDelete className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              {/* </> */}
              {/* ))} */}
              {/* <tr>
                    <td colSpan="6" className="py-4 text-gray-400">
                      {t("No Team Members")}
                    </td>
                  </tr> */}
            </tbody>
          </table>
          {/* <div className="delete">
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>
                <Typography variant="h5" color="blue-gray">
                  Your Attention is Required!
                </Typography>
              </DialogHeader>
              <DialogBody divider className="grid place-items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-16 w-16 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.297-1.206A6.75 6.75 0 015.25 9V9zM7.5 9a4.5 4.5 0 019 0v.75a6.75 6.75 0 01-1.5 4.5v-.001A2.25 2.25 0 018.25 14a2.25 2.25 0 01-2.25-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg>
                <Typography variant="h6" className="text-center text-lg">
                  Are you sure you want to delete this user?
                </Typography>
              </DialogBody>
              <DialogFooter>
                <Btn variant="text" color="red" onClick={handleOpen}>
                  Cancel
                </Btn>
                <Btn variant="gradient" onClick={handleDelete}>
                  Yes, delete
                </Btn>
              </DialogFooter>
            </Dialog>
          </div> */}
        </div>

        {/* <div className=" block lg:hidden">
        <Accordion key={idx} open={openAcc === idx}>
          <AccordionHeader
            className="p-3 rounded-3xl text-gray my-2 shadow-md bg-white"
            onClick={() => handleOpenAccordion(idx)}
          >
            <h4 className="text-blue my-1"> {t("ownerTeam")}</h4>
          </AccordionHeader>
          <AccordionBody open={openAcc === idx}>
            {ownerTeam.map((member) => (
              <div
                key={member._id}
                className="flex flex-col relative rounded-xl shadow-md p-4 my-2 bg-white"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    className="text-red"
                    // onClick={() => {
                    //   setSelectedUserId(member._id);
                    //   handleOpen();
                    // }}
                  >
                    <MdDelete className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <ProfileAvatar
                    name={member.name}
                    profilePic={member.profilePic}
                  />
                  <span className="text-base font-medium">{member.name}</span>
                  <span className="text-base font-medium">
                    {member.vocation ? member.vocation.name : "N/A"}
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{
                      color: "#5BA6FF",
                    }}
                  >
                    {member.email}
                  </span>
                  <span
                    className="text-base font-medium"
                    style={{
                      color: "#34C759",
                    }}
                  >
                    {member.phone}
                  </span>
                  <span>{member.access}</span>
                </div>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </div>  */}
      </div>
    </div>
  );
};

export default UserDetails;