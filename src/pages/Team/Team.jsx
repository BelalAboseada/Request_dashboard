import i18next, { t } from "i18next";
import { BsEye, BsEyeSlash, BsMicrosoftTeams } from "react-icons/bs";
import Button from "../../components/UI/Button/Button";
import Select, { components, useStateManager } from "react-select";

// import {
//   // Input as MaterialInput,
//   // Menu,
//   // MenuHandler,
//   // MenuList,
//   // MenuItem,
//   // Button as Btn,
// } from "@material-tailwind/react";
import { CiMail } from "react-icons/ci";
import { MdDelete, MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";
import ProfileAvatar from "../../components/profilePic/profilePic";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid var(--gray)",
    borderRadius: "15px",
    padding: "5px",
    minHeight: "42px",
    boxShadow: "none",
    "&:hover": { borderColor: "var(--gray)", value: false },
  }),
  placeholder: (provided) => ({ ...provided, color: "#999" }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--gray)",
    "&:hover": { color: "var(--gray)", value: false },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    color: "var(--gray)",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--purple)",
      color: "white",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    marginTop: "4px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "var(--purple)",
    borderRadius: "12px",
    padding: "3px 6px",
  }),
  multiValueLabel: (provided) => ({ ...provided, color: "white" }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--purple)",
      color: "var(--red)",
    },
  }),
};

const getErrorClass = (hasError) =>
  hasError ? "border border-red border-solid" : "";
// Reusable input component
export function Input({
  type,
  onChange,
  label,
  placeholder,
  required,
  icon,
  className,
  isPassword,
  togglePasswordVisibility,
  autoComplete,
  hasError,
  value,
  min,
  max,
  pattern,
}) {
  return (
    <div className="flex flex-col relative">
      <label className="font-medium text-sm text-start text-black">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        minLength={min}
        maxLength={max}
        required={required}
        pattern={pattern}
        className={`rounded-lg input relative px-3 py-2 border-gray border placeholder:font-medium placeholder:text-base placeholder:text-gray focus:bg-white ${getErrorClass(
          hasError
        )} ${className}`}
      />
      <span className="absolute ltr:right-2 rtl:left-2 top-8 w-6 h-6 text-gray">
        {icon}
      </span>
      {isPassword && (
        <span
          className="absolute ltr:right-2 rtl:left-2 top-7 w-6 h-6 text-gray cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {type === "password" ? <BsEyeSlash /> : <BsEye />}
        </span>
      )}
    </div>
  );
}

// const AnimatedMultiValue = (props) => (
//   <motion.div
//     initial={{ scale: 0.8, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     exit={{ scale: 0.8, opacity: 0 }}
//     transition={{ duration: 0.2 }}
//   >
//     <components.MultiValue {...props} />
//   </motion.div>
// );
const Team = () => {
  // const user = useSelector((state) => state.auth.user);
  // const token = useSelector((state) => state.auth.token);
  // const countries = useCountries().countries;
  // const [countryIndex, setCountryIndex] = useState(230);
  // const { name, flags, countryCallingCode } = countries[countryIndex];
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [vocations, setVocations] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVocation, setSelectedVocation] = useState([]);
  // const [selectedAccess, setSelectedAccess] = useState([]);
  const [accessList, setAccessList] = useState({
    delete: false,
    create: false,
    edit: false,
    read: false,
  });
  const [loading, setLoading] = useState(true);
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Tags, setTags] = useState([]);
  const [SelectedTags, setSelectedTags] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);

  const [isSelectOpen, setIsSelectOpen] = useState(true);
  const [TagsLoading, setTagsLoading] = useState(true);
  const [VocationLoading, setVocationLoading] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({
    Name: false,
    Email: false,
    Password: false,
    Phone: false,
    vocation: false,
    project: false,
    access: false,
    Tag: false,
  });
  const lang = i18next.language;
  const handleOpen = () => setOpen(!open);
  const handleOpenAccordion = (projectId) => {
    setOpenAcc((prevOpen) => (prevOpen === projectId ? null : projectId));
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const [vocationResponse, projectsResponse, TagsRes] =
  //         await Promise.all([
  //           getAllVocations(user._id, lang),
  //           getAllProjectsForUser(user._id, token),
  //           getAllTagsByUser(user._id),
  //         ]);

  //       setVocations(vocationResponse.results);
  //       setVocationLoading(false);

  //       setProjects(projectsResponse.results);
  //       setTags(
  //         TagsRes.results.map((tag) => ({
  //           value: tag._id,
  //           label: tag.name,
  //           colorCode: tag.colorCode,
  //         }))
  //       );
  //       setTagsLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [user._id, token]);

  const accessOptions = [
    { id: "read", label: "READ", value: false },
    { id: "write", label: "WRITE", value: false },
    { id: "create", label: "CREATE", value: false },
    { id: "delete", label: "DELETE", value: false },
  ];

  const staticOptions = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
    { value: "tester", label: "Tester" },
  ];
  const Team = [
  {
    projectId: "project1",
    projectName: "Project Alpha",
    members: [
      {
        _id: "user1",
        name: "John Doe",
        profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
        vocation: { name: "Developer" },
        email: "john.doe@example.com",
        phone: "+201234567890",
        access: "Full Access",
      },
      {
        _id: "user2",
        name: "Jane Smith",
        profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
        vocation: { name: "Designer" },
        email: "jane.smith@example.com",
        phone: "+201234567891",
        access: "Limited Access",
      },
    ],
  },
  {
    projectId: "project2",
    projectName: "Project Beta",
    members: [
      {
        _id: "user3",
        name: "Michael Brown",
        profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
        vocation: { name: "Manager" },
        email: "michael.brown@example.com",
        phone: "+201234567892",
        access: "Admin",
      },
      {
        _id: "user4",
        name: "Emma Johnson",
        profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
        vocation: { name: "Tester" },
        email: "emma.johnson@example.com",
        phone: "+201234567893",
        access: "Viewer",
      },
    ],
  },
];





  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="Team p-2 lg:p-4">
      <div className="header bg-white  rounded-3xl p-2">
        <div className="head  flex items-center  justify-between p-2">
          <h5 className="font-semibold  text-base">{t("Team")}</h5>
          <div className="TotalMembers flex items-center  gap-2">
            <span
              className="w-7 h-7 md:w-9 md:h-9  flex items-center  justify-center rounded-full"
              style={{
                background: "#CCABDA",
              }}
            >
              <BsMicrosoftTeams className="text-purple-dark" />
            </span>
            <p
              className="font-medium md:font-semibold  text-base md:text-lg  "
              style={{
                color: "#696A6B",
              }}
            >
              {t("Total Team Members")}
            </p>
            <span className="font-medium  text-base">
              12
              {/* {teamCount} */}
            </span>
          </div>
        </div>
      </div>
      <div className="AddNewAccess bg-white rounded-3xl m-2 p-4">
        <form
          // onSubmit={handleSubmit}
          className="form grid grid-cols-4 gap-2 max-w-5xl"
        >
          <div className="col-span-4 md:col-span-2">
            <Input
              type={"email"}
              name="email"
              label={t("Email")}
              placeholder={t("Email")}
              autoComplete={"email"}
              pattern={"/^[^s@]+@[^s@]+.[^s@]+$/"}
              // onChange={(e) => setEmail(e.target.value)}
              // value={Email}
              // hasError={fieldErrors.Email}
              icon={<CiMail />}
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <Input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              label={t("Password")}
              placeholder={t("Password")}
              autoComplete={"new-password"}
              // onChange={(e) => setPassword(e.target.value)}
              required
              // value={Password}
              min={8}
              isPassword
              togglePasswor
              Visibility={togglePasswordVisibility}
            />
          </div>
          <div className="col-span-4 md:col-span-2 ">
            <Input
              type="text"
              name="name"
              // onChange={(e) => setName(e.target.value)}
              label={t("Name")}
              // value={Name}
              placeholder={t("Name")}
              required
              icon={<MdOutlinePerson />}
            />
          </div>
          {/* <div className="col-span-4 md:col-span-2 relative flex mt-5  w-full ">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Btn
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2  ltr:rounded-r-none rtl:rounded-l-none border ltr:border-r-0 rtl:border-l-0 border-gray border-solid pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Btn>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountryIndex(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name}{" "}
                      <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <MaterialInput
              type="tel"
              // value={Phone}
              // onChange={handlePhoneChange}
              placeholder="Mobile Number"
              className="ltr:rounded-l-none rtl:rounded-r-none border border-solid !border-gray focus:!border-gray"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div> */}
          <div className="col-span-4 md:col-span-2">
            <label
              className="Input_label flex items-center justify-start gap-2 font-jost text-base font-medium mx-2 cursor-pointer"
              htmlFor="vocation"
            >
              {t("Vocation")}
            </label>
            <Select
              placeholder={t("Select Vocation")}
              id="vocation"
              isClearable
              // isLoading={VocationLoading}
              options={staticOptions}
              onChange={(e) => setSelectedVocation(e)}
              value={selectedVocation}
              styles={customStyles}
              // components={{ MultiValue: AnimatedMultiValue }}
            />
          </div>

          <div className="col-span-4 flex flex-col   ">
            <label
              className="Input_label flex items-center justify-start gap-2 font-jost text-base font-medium mx-2 cursor-pointer"
              htmlFor="access"
            >
              {t("Access")}
            </label>

            <Select
              // options={accessOptions.map((option) => ({
              //   value: option.id,
              //   label: option.label,
              // }))}
              // value={setSelectedAccess.optionSelected}
              isMulti
              // onChange={handleChange}
              // components={{ Option: CustomOption }}
              styles={customStyles}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              classNamePrefix="select"
            />
          </div>

          {/* {fieldErrors && (
            <div className="text-red font-bold text-center p-2">
              {t(fieldErrors.message)}
            </div>
          )} */}
          <div className="btn flex items-center justify-center md:justify-end col-span-4 mt-5">
            <Button className={" text-sm"}>{t("+Add new access")}</Button>
          </div>
        </form>
      </div>
      <div className="DelegatedAccess">
        <div className="DelegatedAccess bg-white rounded-3xl m-2 p-4 relative overflow-x-auto hidden lg:block">
          <table className="w-full text-sm text-center text-gray-500 border-collapse ">
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
              {Team.map((project) => (
                <>
                  <tr key={project.projectId}>
                    <td
                      colSpan="6"
                      className="text-left py-3 px-4  font-medium text-gray-dark"
                    >
                      {project.projectName}
                    </td>
                  </tr>

                  {project.members.map((member) => (
                    <tr
                      key={member._id}
                      className="bg-white shadow-lg rounded-3xl my-1 border-b last:border-none"
                    >
                      <td className="px-4 py-2 flex items-center gap-3">
                        <ProfileAvatar
                          name={member.name}
                          profilePic={member.profilePic}
                        />
                        <span>{member.name}</span>
                      </td>
                      <td className="px-4 py-2">
                        {member.vocation ? member.vocation.name : "N/A"}
                      </td>
                      <td
                        className="px-4 py-2 "
                        style={{
                          color: "#5BA6FF",
                        }}
                      >
                        {member.email}
                      </td>
                      <td
                        className="px-4 py-2 text-green"
                        style={{
                          color: "#34C759",
                        }}
                      >
                        {member.phone}
                      </td>
                      <td className="px-4 py-2">{member.access}</td>
                      <td className="px-4 py-2 flex justify-center gap-3">
                        <button
                          className="text-red"
                          // onClick={() => {
                          //   setSelectedUserId(member._id);
                          //   setSelectedProjectId(project.projectId);

                          //   handleOpen();
                          // }}
                        >
                          <MdDelete className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
          <div className="delete">
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
                <Button variant="text" color="red" onClick={handleOpen}>
                  Cancel
                </Button>
                <Button variant="gradient">Yes, delete</Button>
              </DialogFooter>
            </Dialog>
          </div>

          {/*  mobile view  */}
        </div>
        <div className="block lg:hidden">
          {Team.map((project) => (
            <Accordion
              key={project.projectId}
              open={openAcc === project.projectId}
            >
              <AccordionHeader
                className=" p-3 rounded-3xl text-gray my-2 shadow-md bg-white"
                onClick={() => handleOpenAccordion(project.projectId)}
              >
                <h5>{project.projectName}</h5>
              </AccordionHeader>
              <AccordionBody open={openAcc === project.projectId}>
                {project.members.map((member) => (
                  <div
                    key={member._id}
                    className="flex flex-col  relative  rounded-xl shadow-md p-4 my-2 bg-white"
                  >
                    <div className="absolute top-4 rtl:left-4 ltr:right-4 flex gap-2">
                      <button
                        className="text-red"
                        // onClick={() => {
                        //   setSelectedUserId(member._id);
                        //   setSelectedProjectId(project.projectId);

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

                      <span className="tet-base font-medium">
                        {member.name}
                      </span>
                      <span className="tet-base font-medium">
                        {member.vocation ? member.vocation.name : "N/A"}
                      </span>
                      <span
                        className="tet-base font-medium"
                        style={{
                          color: "#5BA6FF",
                        }}
                      >
                        {member.email}
                      </span>
                      <span
                        className="tet-base font-medium"
                        style={{
                          color: "#34C759",
                        }}
                      >
                        {member.phone}
                      </span>
                      <span>{member.access}</span>
                    </div>{" "}
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
