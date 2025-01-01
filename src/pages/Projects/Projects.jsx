import { t } from "i18next";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdSpaceDashboard,
} from "react-icons/md";
import StatusHeader from "../../components/StatusHeader/StatusHeader";
import { Link } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
import Pagination from "../../components/UI/Pagination/Pagination";
import { useEffect, useState } from "react";
import BoardViewProject from "../../components/boardView/boardViewProject";
import { getProjects } from "../../Services/api";
import ProfileAvatar from "../../components/profilePic/profilePic";
import Skeleton from "react-loading-skeleton";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Status, setStatus] = useState("all");

  // Handler for page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const buttonData = [
    { label: t("All"), value: "all" },
    { label: t("Waiting"), value: "waiting" },
    { label: t("working"), value: "working" },
    { label: t("completed"), value: "completed" },
    { label: t("Delayed"), value: "delayed" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProjects(Status);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [Status]);
  const handleFilterChange = (value) => {
    setStatus(value);
  };

  //  format date
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="Projects p-2 lg:p-4">
      <div className="projectDetails bg-white  rounded-2xl shadow-md p-2">
        <div className="flex items-center justify-between p-2 border-b border-solid border-gray-100">
          <div className="relative after:content-[''] after:absolute after:bg-purple after:rounded-t-md  after:h-1 after:w-full after:left-0 after:-bottom-2">
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
            <span className="font-semibold"> {Projects?.count}</span>
          </div>
        </div>
        <StatusHeader
          buttons={buttonData}
          onFilterChange={handleFilterChange}
        />

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
          {loading ? (
            Array(10)
              .fill()
              .map((_, idx) => (
                <tr key={idx}>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                  <td colSpan="1" className="text-center p-2 ">
                    <Skeleton height={30} baseColor="#F1F5F9" />
                  </td>
                </tr>
              ))
          ) : (
            <tbody>
              {Projects?.results?.length > 0 ? (
                Projects?.results?.map((project, index) => (
                  <tr key={index} className="shadow-sm rounded-2xl">
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
                        value={project.progress}
                        size="sm"
                        color={project.progress === 0 ? "gray" : "purple"}
                        trackColor="gray"
                        barProps={{
                          style: {
                            height: "5px",
                            backgroundColor:
                              project.progress === 0 ? "lightgray" : "purple",
                          },
                        }}
                      />
                      {project.progress === 0 && (
                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "12px",
                            color: "gray",
                          }}
                        >
                          No progress yet
                        </div>
                      )}
                    </td>

                    <td className="p-3">
                      <div className="avatars flex items-center  -space-x-2">
                        {project?.members.length > 0 ? (
                          project?.members?.map((member, idx) => (
                            <div key={idx}>
                              <ProfileAvatar
                                profilePic={member.profilePic}
                                name={member.name}
                              />
                            </div>
                          ))
                        ) : (
                          <span className="text-gray text-sm font-normal">
                            No team members
                          </span>
                        )}
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
                          </span>
                          <span className="text-gray text-xs">
                            {formatDate(project.sDate)}
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
                            {formatDate(project.dueDate)}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 flex space-x-4 rtl:space-x-reverse"></td>
                    <td>
                      <Link
                        to={`/Project/${project._id}`}
                        state={{
                          projectId: project._id,
                        }}
                        className=""
                      >
                        <MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 text-purple rotate-0 rtl:rotate-180" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-3 text-center text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          )}
        </table>
        {/*  mobile view */}
        <div className="block lg:hidden">
          {loading ? (
            Array(10)
              .fill()
              .map((_, idx) => (
                <div className="my-3" key={idx}>
                  <Skeleton height={50} baseColor="#F1F5F9" />
                </div>
              ))
          ) : Projects?.results?.length > 0 ? (
            Projects.results.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <BoardViewProject
                  ProgressValue={project.progress}
                  sDate={formatDate(project.sDate)}
                  eDate={formatDate(project.dueDate)}
                  NameOfTask={project.name}
                  Status={project.status}
                  // avatars={project.members}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No projects found</div>
          )}
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
