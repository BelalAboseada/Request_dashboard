import { t } from "i18next";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdSpaceDashboard,
} from "react-icons/md";
import StatusHeader from "../../components/StatusHeader/StatusHeader";
import { Link } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
import Pagination from "../../components/UI/Pagination/Pagination";
import { useState } from "react";
import BoardViewProject from "../../components/boardView/boardViewProject";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  // Handler for page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const buttons = [
    { label: "Approved", value: "Approved" },
    { label: "Waiting", value: "Waiting" },
    { label: "Denied", value: "Denied" },
    { label: "Finished", value: "Finished" },
  ];

  const projects = [
    {
      name: "Project Name",
      status: "High",
      progress: 70,
      budget: 1234,
      startDate: "10 Jan",
      dueDate: "29 Aug",
      teamMembers: [
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
      ],
    },
    {
      name: "Project Name",
      status: "High",
      progress: 70,
      budget: 1234,
      startDate: "10 Jan",
      dueDate: "29 Aug",
      teamMembers: [
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
      ],
    },
    {
      name: "Project Name",
      status: "High",
      progress: 70,
      budget: 1234,
      startDate: "10 Jan",
      dueDate: "29 Aug",
      teamMembers: [
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
      ],
    },
    {
      name: "Project Name",
      status: "High",
      progress: 70,
      budget: 1234,
      startDate: "10 Jan",
      dueDate: "29 Aug",
      teamMembers: [
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
      ],
    },
    {
      name: "Project Name",
      status: "High",
      progress: 70,
      budget: 1234,
      startDate: "10 Jan",
      dueDate: "29 Aug",
      teamMembers: [
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
        {
          name: "john",
          profilePic: "https://loremflickr.com/320/240/paris/all",
        },
      ],
    },
  ];

  return (
    <div className="Projects p-2 lg:p-4">
      <div className="projectDetails bg-white  rounded-2xl shadow-md p-2">
        <div className="flex items-center justify-between p-2 border-b border-solid border-gray-100">
          <div className="relative after:content-[''] after:absolute after:bg-purple after:rounded-t-md  after:h-2 after:w-full after:left-0 after:-bottom-2">
            <span className="text-purple font-medium  text-base lg:text-lg">
              {t("Projects")}
            </span>
          </div>
          <div className="flex  items-center justify-between gap-2 lg:gap-4 shadow-md  rounded-2xl  p-2">
            <span
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full  flex items-center justify-center"
              style={{
                background: "#CCABDA29",
              }}
            >
              <MdSpaceDashboard className="text-purple w-5 h-5" />
            </span>

            <p className="font-semibold  text-xl text-purple hidden lg:block">
              {t("totalProjects")}
            </p>
            <span className="font-semibold"> 122</span>
          </div>
        </div>
        <StatusHeader buttons={buttons} />

        <table className="w-full table-auto mt-10 rounded-3xl  bg-white hidden lg:table ">
          <thead>
            <tr className=" border-b">
              <th className="p-3 text-start text-purple ">
                {t("Project Name")}
              </th>
              <th className="p-3 text-start text-purple">{t("Status")}</th>
              <th className="p-3 text-start text-purple">{t("Progress")}</th>
              <th className="py-3 text-start text-purple">{t("Members")}</th>
              <th className="p-3 text-start text-purple">{t("budget")}</th>
              <th className="p-3 text-start text-purple">{t("date")}</th>
              <th className="py-3 text-start text-purple"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index} className=" shadow-sm rounded-2xl ">
                <td className="p-3">{project.name}</td>
                <td className="p-3">
                  <span
                    className={`${project.status} Tag font-inter font-semibold text-xs text-center py-1 px-1 md:px-4 lg:px-10 rounded-3xl`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-3">
                  <Progress
                    value={25}
                    size="sm"
                    color="purple"
                    trackColor="gray"
                    barProps={{
                      style: {
                        height: "5px",
                        backgroundColor: "purple",
                      },
                    }}
                  />
                </td>

                <td className="p-3">
                  <div className="avatars flex items-center  -space-x-2">
                    {project.teamMembers.map((member, idx) => (
                      <div key={idx}>
                        <img
                          src={member.profilePic}
                          alt={member.name}
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-3">{project.budget}$</td>

                <td className="p-3">
                  <div className="flex items-center flex-col bg-gray-200 rounded-lg ">
                    <div>
                      <span
                        className=" font-bold text-xs "
                        style={{
                          color: "#1976D2",
                        }}
                      >
                        {t("sDate")} :
                      </span>{" "}
                      <span className="text-gray text-xs">
                        {project.startDate}
                      </span>
                    </div>
                    <div>
                      <span
                        className=" font-bold text-xs "
                        style={{
                          color: "#F44336",
                        }}
                      >
                        {t("dDate")} :
                      </span>
                      <span className="text-gray text-xs">
                        {" "}
                        {project.dueDate}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="p-3 flex space-x-4 rtl:space-x-reverse"></td>
                <td>
                  <Link to={"/project"} className="">
                    <MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 text-purple rotate-0 rtl:rotate-180" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*  mobile view */}
        <div className="block lg:hidden">
          {projects.map((project, idx) => (
            // <div
            //   key={idx}
            //   className="gap-4 p-3 m-3 rounded-3xl  bg-white  shadow-sm "
            // >
            //   <div className="flex items-center justify-between">
            //     <div className="flex items-center justify-start gap-2">
            //       <span>{project.name}</span>
            //     </div>

            //     <div className="flex items-center gap-2">
            //       <MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 text-purple rotate-0 rtl:rotate-180" />
            //     </div>
            //   </div>
            //   <div className="flex items-center justify-between gap-2 my-2">
            //     <span></span>
            //     <p></p>
            //   </div>
            //   <div className="w-fit">
            //     <span className="font-bold"></span>
            //   </div>

            //   <div className="flex items-center justify-between mt-4 ">
            //     <span className="text-gray text-sm font-normal">{project.startDate}</span>
            //     <span className="text-gray text-sm font-normal">{project.dueDate}</span>
            //   </div>
            // </div>
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2  gap-2 ">
              <BoardViewProject
                ProgressValue={70}
                sDate={project.startDate}
                eDate={project.dueDate}
                NameOfTask={project.name}
                Status={project.status}
              />
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Projects;

