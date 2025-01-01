import { CircularProgress } from "@mui/joy";
import { t } from "i18next";
import { MdCalendarToday } from "react-icons/md";
import Input from "../../components/UI/Input/Input";
import { Link, useLocation } from "react-router-dom";
import { FaFileLines } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { TagsChart } from "../../components/TagsChart/TagsChart";
import { useEffect, useState } from "react";
import { getProjectById } from "../../Services/api";
import ProfileAvatar from "../../components/profilePic/profilePic";

const ProjectDetails = () => {
  const location = useLocation();
  const { projectId } = location.state || {};
  const [Project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getProjectById(projectId);
      setProject(data?.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, [projectId]);

  const tags = [
    {
      id: 1,
      label: "Feature Request",
      color: "#2196F3",
    },
    {
      id: 2,
      label: "Bug Report",
      color: "#FFC107",
    },
    {
      id: 3,
      label: "Enhancement",
      color: "#4CAF50",
    },
    {
      id: 4,
      label: "Performance",
      color: "#FF9800",
    },
  ];
  return (
    <div className="projectDetails p-2 lg:-p-4">
      <div className="projectDetails bg-white  rounded-2xl shadow-md p-2">
        <div className="flex items-center justify-between p-2 border-b border-solid border-gray-100">
          <div className="relative after:content-[''] after:absolute after:bg-purple after:rounded-t-md  after:h-1 after:w-full after:left-0 after:-bottom-2">
            <span className="text-purple font-medium  text-base lg:text-lg">
              {t("ProjectData")}
            </span>
          </div>
          <span className="text-gray text-sm">25 Jan, 10.40 PM</span>
        </div>
        <div className="flex justify-between  items-center m-3">
          <div className="flex items-center gap-3">
            <ProfileAvatar
              profilePic={Project?.owner?.profilePic}
              name={Project?.owner?.name}
              className=" w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-3xl"
            />
            <div className="flex flex-col ">
              <span className="font-bold text-base lg:text-lg">
                {Project?.owner?.name}
              </span>
              <span className="font-medium text-sm lg:text-base">
                {t("Owner")}
              </span>
            </div>
          </div>
          <div className="flex  items-center gap-3">
            <span className="font-extrabold text-lg lg:text-2xl text-green">
              3000$
            </span>
            <span className="font-extrabold text-lg lg:text-2xl text-red">
              {" "}
              -2500$
            </span>
          </div>
        </div>
        <div className="wrapper bg-white grid grid-cols-2 rounded-3xl m-2 ">
          <div className="box col-span-2 lg:col-span-1 relative flex flex-col ">
            <div className="head flex items-center  justify-between  my-3 mx-4">
              <h5 className="font-bold  text-2xl ">{Project?.name}</h5>
              <p className="font-semibold  text-sm">{"Architecture"}</p>
            </div>

            <div className="analytics_box rounded-md shadow-md p-8 flex flex-col gap-3  mt-4 mb-4 mx-4 ">
              <div
                className={`progress_wrapper flex flex-col lg:flex-row items-center gap-2 rounded-2xl shadow-md p-8 relative `}
              >
                <div className="Progress">
                  <span className="absolute top-1 font-inter font-extrabold text-xs leading-4 my-1 ">
                    {t("Progress")}
                  </span>
                  <CircularProgress
                    className="!text-black font-poppins font-normal text-4xl"
                    determinate
                    sx={{
                      "--CircularProgress-size": "180px",
                      "--CircularProgress-trackThickness": "30px",
                      "--CircularProgress-progressThickness": "30px",
                      "--CircularProgress-animationDuration": "1s",
                      "--CircularProgress-trackColor": "#F5F5F5",
                      "--CircularProgress-progressColor": "var(--purple)",
                      "--CircularProgress-trackShadowColor":
                        "rgba(0, 0, 0, 0.12)",
                      "--CircularProgress-progressShadowColor":
                        "rgba(0, 0, 0, 0.12)",
                      "--CircularProgress-trackBorderRadius": "50%",
                      "--CircularProgress-progressBorderRadius": "50%",
                      "--CircularProgress-trackShadowBlur": "10px",
                      "--CircularProgress-progressShadowBlur": "10px",
                      "--CircularProgress-progressShadowOffset": "0px 2px",
                    }}
                    value={70}
                    variant="solid"
                  >
                    {/* {Math.round(Project.progress)}% */}
                    70%
                  </CircularProgress>
                </div>

                <div className="tags relative">
                  <span className="absolute -top-5 font-inter font-extrabold text-xs leading-4 my-1 ">
                    {t("Tags")}
                  </span>

                  <TagsChart tags={tags} />
                </div>
              </div>

              <div className="Badges flex items-center  justify-around gap-2">
                <span
                  className={`high w-full text-center py-2 rounded-3xl font-inter font-semibold text-sm mt-2`}
                >
                  {t(Project?.projectPriority)}
                </span>
                <span
                  className={` working w-full text-center py-2 rounded-3xl font-inter font-semibold text-sm mt-2`}
                >
                  {t(Project?.status)}
                </span>
              </div>

              <div className="Tags flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="tag-item flex items-center gap-1 px-3 py-1 rounded-full"
                  >
                    <span
                      className="w-4  h-4  rounded-sm"
                      style={{
                        backgroundColor: tag.color || "#D3D3D3",
                      }}
                    />
                    <span className="text-black font-semibold text-xs">
                      {tag.label || "Unknown Tag"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="form m-3 col-span-2 lg:col-span-1  ">
            <Input
              disabled
              className="bg-white border border-purple border-solid "
              label={t("Number Of Tasks")}
              value={Project?.taskCount}
            />
            <Input
              disabled
              required={true}
              className="bg-white border border-purple border-solid "
              label={t("sDate")}
              placeholder={"27-10-2022"}
              inputIcons={{
                element: <MdCalendarToday />,
                type: "calendar",
              }}
              iconClass={"text-yellow"}
            />
            <Input
              disabled
              required={true}
              className="bg-white border border-purple border-solid "
              label={t("dDate")}
              placeholder={"29-11-2023"}
              inputIcons={{
                element: <MdCalendarToday />,
                type: "calendar",
              }}
              iconClass={"text-yellow"}
            />

            <Input
              disabled
              type={"name"}
              required={true}
              className="bg-white border border-purple border-solid "
              label={t("owner")}
              placeholder={"Owner name"}
            />

            <Input
              disabled
              type={"name"}
              required={true}
              className="bg-white border border-purple border-solid "
              label={t("contractor")}
              placeholder={"contractor name "}
            />

            <div className="flex right-0 my-2 items-center justify-between">
              <Link>
                <button
                  className="bg-white  flex items-center gap-2"
                  style={{
                    borderRadius: "18px",
                    padding: "9px 8px 9px 8px",
                    color: "#515151",
                  }}
                >
                  <span>
                    <BiTask className="w-8 h-8  text-red" />
                  </span>
                  <span className="underline underline-offset-2 font-jost text-base font-normal leading-6 ">
                    {t("view all tasks")}
                  </span>
                </button>
              </Link>
              <button className="files flex items-center gap-1 mx-1">
                <span className="text-purple-dark font-inter font-extrabold text-sm leading-4">
                  0
                </span>
                <FaFileLines className="text-purple-dark h-7 w-7 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
