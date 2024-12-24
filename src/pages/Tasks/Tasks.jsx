import { t } from "i18next";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdSpaceDashboard,
} from "react-icons/md";
import StatusHeader from "../../components/StatusHeader/StatusHeader";
import { Link } from "react-router-dom";
import Pagination from "../../components/UI/Pagination/Pagination";
import { useState } from "react";
import BoardViewProject from "../../components/boardView/boardViewProject";
import { FaFileLines } from "react-icons/fa6";

const Tasks = () => {
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

  const Tasks = [
    {
      name: "Task Name",
      tag: "Electricity",
      startDate: "10 Jan",
      dueDate: "29 Aug",
      TaskSetter: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      ResponsiblePerson: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      files: 2,
    },
    {
      name: "Task Name",
      tag: "Electricity",
      startDate: "10 Jan",
      dueDate: "29 Aug",
      TaskSetter: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      ResponsiblePerson: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      files: 2,
    },
    {
      name: "Task Name",
      tag: "Electricity",
      startDate: "10 Jan",
      dueDate: "29 Aug",
      TaskSetter: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      ResponsiblePerson: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      files: 2,
    },
    {
      name: "Task Name",
      tag: "Electricity",
      startDate: "10 Jan",
      dueDate: "29 Aug",
      TaskSetter: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      ResponsiblePerson: {
        name: "john",
        profilePic: "https://loremflickr.com/320/240/paris/all",
      },
      files: 2,
    },
  ];

  return (
    <div className="Projects p-2 lg:p-4">
      <div className="projectDetails bg-white  rounded-2xl shadow-md p-2">
        <div className="flex items-center justify-between p-2 border-b border-solid border-gray-100">
          <div className="relative after:content-[''] after:absolute after:bg-purple after:rounded-t-md  after:h-1 after:w-full after:left-0 after:-bottom-2">
            <span className="text-purple font-medium  text-base lg:text-lg">
              {t("Tasks")}
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
              {t("totalTasks")}
            </p>
            <span className="font-semibold"> 122</span>
          </div>
        </div>
        <StatusHeader buttons={buttons} />

        <table className="w-full table-auto mt-10 rounded-3xl  bg-white hidden lg:table ">
          <thead>
            <tr className=" border-b">
              <th className="p-3 text-start text-purple ">{t("TaskName")}</th>
              <th className="p-3 text-start text-purple">{t("tag")}</th>
              <th className="py-3 text-start text-purple">{t("Tasksetter")}</th>
              <th className="p-3 text-start text-purple">
                {t("Responsible Person")}
              </th>
              <th className="p-3 text-start text-purple">{t("date")}</th>
              <th className="py-3 text-start text-purple"></th>
            </tr>
          </thead>
          <tbody>
            {Tasks.map((project, index) => (
              <tr key={index} className=" shadow-sm rounded-2xl ">
                <td className="p-3">{project.name}</td>
                <td className="p-3">
                  <span
                    className={`${project.tag} Tag font-inter font-semibold text-xs text-center py-1 px-1 md:px-4 lg:px-10 rounded-3xl`}
                  >
                    {project.tag}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img
                        src={project.TaskSetter.profilePic}
                        alt={project.TaskSetter.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="ml-1 text-sm text-gray-500">
                        {project.TaskSetter.name}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="p-3">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img
                        src={project.ResponsiblePerson.profilePic}
                        alt={project.ResponsiblePerson.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="ml-1 text-sm text-gray-500">
                        {project.ResponsiblePerson.name}
                      </span>
                    </div>
                  </div>
                </td>

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
                <td className="flex items-center">
                  <FaFileLines className="text-purple-dark" />
                  <span className="text-purple-dark">0</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/*  mobile view */}
        <div className="block lg:hidden">
          {Tasks.map((project, idx) => (
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
                sDate={project.startDate}
                eDate={project.dueDate}
                NameOfTask={project.name}
                Status={project.tag}
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

export default Tasks;
