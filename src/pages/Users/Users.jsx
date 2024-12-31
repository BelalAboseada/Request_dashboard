import { t } from "i18next";
import { useEffect, useState } from "react";
import {
  MdEngineering,
  MdOutlineKeyboardDoubleArrowRight,
  MdWork,
} from "react-icons/md";
import { TfiFilter } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers } from "../../Services/api";
import ProfileAvatar from "../../components/profilePic/profilePic";
import Loader from "../../components/Loader/Loader";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
const Users = () => {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => ({
        ...prevUsers,
        results: prevUsers.results.filter((user) => user._id !== userId),
      }));
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user.");
    }
  };

  return (
    <div className="Users p-3">
      <div className="admins grid grid-cols-1 lg:grid-cols-3 gap-3 my-3">
        <div className="admin">
          <div className=" bg-white  flex items-center  gap-2 p-3 rounded-3xl">
            <div
              className="icon p-2 w-14 h-12 rounded-full flex justify-center items-center "
              style={{
                background: "rgba(204, 171, 218, 0.29) ",
              }}
            >
              <span>
                <MdWork className="text-purple w-6 h-6" />
              </span>
            </div>
            <div className="flex flex-col w-full">
              <h4 className=" text-purple font-semibold text-xl justify-start">
                {t("consultant")}
              </h4>
              <span className="  font-semibold text-xl flex justify-end">
                {Users?.countConsultant}
              </span>
            </div>
          </div>
        </div>
        <div className="contractor">
          <div className=" bg-white  w-full flex items-center  gap-2 p-3 rounded-3xl">
            <div
              className="icon p-2 w-14 h-12 rounded-full flex justify-center items-center "
              style={{
                background: "rgba(134, 227, 206, 0.2)",
              }}
            >
              <span>
                <MdEngineering className="text-blue w-6 h-6" />
              </span>
            </div>
            <div className="flex flex-col w-full">
              <h4 className=" text-blue font-semibold text-xl justify-start">
                {t("contractor")}
              </h4>
              <span className="  font-semibold text-xl flex justify-end">
                {Users?.countContractors}
              </span>
            </div>
          </div>
        </div>
        <div className="owner">
          <div className=" bg-white  w-full flex items-center  gap-2 p-3 rounded-3xl">
            <div
              className="icon p-2 w-14 h-12 rounded-full flex justify-center items-center "
              style={{
                background: "rgba(252, 136, 123, 0.29)",
              }}
            >
              <span>
                <MdEngineering className="text-red w-6 h-6" />
              </span>
            </div>
            <div className="flex flex-col w-full">
              <h4 className=" text-red font-semibold text-xl justify-start">
                {t("owner")}
              </h4>
              <span className="  font-semibold text-xl flex justify-end">
                {Users?.countOwners}
              </span>
            </div>
          </div>
        </div>
      </div>
      <table className="w-full table-auto mt-10 rounded-3xl  bg-white hidden lg:table ">
        <thead>
          <tr className=" border-b">
            <th className="p-3 text-start text-gray ">{t("UserName")}</th>
            <th className="p-3 text-start text-gray">{t("role")}</th>
            {/* <th className="p-3 text-start text-gray">{t("Op. NO.")}</th> */}
            <th className="p-3 text-start text-gray">{t("Email")}</th>
            <th className="p-3 text-start text-gray">{t("Package")}</th>
            <th className="p-3 text-start text-gray"></th>
            <th className="py-3 text-start text-purple flex items-center gap-1">
              <span>{t("All")}</span>
              <span>
                <TfiFilter />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array(6)
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
                </tr>
              ))
          ) : (
            <>
              {Users?.results?.map((user, idx) => (
                <tr key={idx} className=" shadow-sm rounded-2xl ">
                  <td className="p-3 flex items-center gap-2">
                    <ProfileAvatar
                      profilePic={user.profilePic}
                      name={user.name}
                      alt={"User Avatar"}
                    />
                    <span>{user.name}</span>
                  </td>
                  <td className="p-3">{user.userType}</td>
                  {/* <td className="p-3">{user.}</td> */}
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.plan.name}</td>
                  <td className="p-3 flex space-x-4 rtl:space-x-reverse">
                    {/* <button className="bg-yellow text-white font-medium px-4 py-2 rounded-lg">
                      {t("StopTheUser")}
                    </button> */}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red text-white px-4 py-2 rounded-lg"
                    >
                      {t("Delete")}
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/User/${user._id}`}
                      state={{
                        userId: user._id,
                      }}
                    >
                      <MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 text-purple rotate-0 rtl:rotate-180" />
                    </Link>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {/*  mobile view */}

      <div className="block lg:hidden">
        {" "}
        {Users?.results?.map((user, index) => (
          <div
            key={index}
            className="gap-4 p-3 m-3 rounded-3xl  bg-white  shadow-sm "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <ProfileAvatar
                  profilePic={user.profilePic}
                  name={user.name}
                  alt={"User Avatar"}
                />
                <span>{user.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <MdOutlineKeyboardDoubleArrowRight className="w-8 h-8 text-purple rotate-0 rtl:rotate-180" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 my-2">
              <span>{user.userType}</span>
              <span>{user.email}</span>
              {/* <p>
                <span className="font-bold"> {t("Op. NO.")} :</span>
                {user.opNo}
              </p> */}
            </div>
            <div className="w-fit">
              <span className="font-bold">{user.plan.name}</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              {/* <button className="bg-yellow text-white font-medium  w-full  px-4 py-2 rounded-lg">
                {t("StopTheUser")}
              </button> */}

              <button
                onClick={() => handleDelete(user._id)}
                className="bg-red text-white w-full px-4 py-2 rounded-lg"
              >
                {t("Delete")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
