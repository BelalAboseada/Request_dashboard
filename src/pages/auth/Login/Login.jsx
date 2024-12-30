import i18next, { t } from "i18next";
import loginImage from "../../../assets/images/Login.png";
import Input from "../../../components/UI/Input/Input";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../../../components/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk } from "../../../redux/services/authServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = i18next.language;
  const { isLoading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value.trim() }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const ClearFields = () => {
    setCredentials({ email: "", password: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    // Trim values from the input fields
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Check if any trimmed field is empty
    if (!trimmedEmail || !trimmedPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await dispatch(
        signInThunk({ email: trimmedEmail, password: trimmedPassword, lang })
      ).unwrap();
      ClearFields();
      toast.success(t("toast.loggedInSuccess"));
      navigate("/");
    } catch (err) {
      console.error("Sign In failed:", err);
      ClearFields();
      if (err === "unauthorized") {
        toast.error(t("toast.unauthorized"));
      } else {
        toast.error(err);
      }
    }
  };

  return (
    <div className="Login lg:h-screen bg-white">
      {isLoading ? (
        <div className="loader flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="h-full grid grid-cols-3 lg:grid-cols-6 gap-2">
          <div className="col-span-3 flex items-center justify-center flex-col gap-3">
            <img
              src={loginImage}
              alt="login Image"
              className={`w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]`}
            />
            <h2 className="text-linear font-extrabold text-4xl ">
              {t("welcomeBack")}
            </h2>
            <p className="text-center text-gray text-lg font-bold">
              {t("Fill in your email and password")}
              <br /> {t("to get started")}
            </p>
          </div>
          <form className="col-span-3" onSubmit={handleSubmit}>
            <div className="  flex  justify-center items-center md:ltr:rounded-l-3xl md:rtl:rounded-r-3xl flex-col gap-10 p-20  shadow-lg h-full  w-full ">
              <div className="UploadLogo rounded-full p-3   bg-gray w-28 h-28 flex items-center  justify-center">
                <label htmlFor="logo">
                  <span>{t("Logo")}</span>
                </label>
                <input type="file" hidden id={"logo"} />
              </div>
              <Input
                id="email"
                type="email"
                value={credentials.email}
                placeholder={t("Enter email")}
                autoComplete="email"
                required
                label={t("Email")}
                inputIcons={<CiMail />}
                aria-describedby="user-email"
                aria-invalid="false"
                onChange={handleChange}
              />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={credentials.password}
                placeholder={"••••••••"}
                autoComplete="current-password"
                required
                label={t("Enter password")}
                labelIcon={<MdLockOutline />}
                onChange={handleChange}
                minLength={8}
                aria-describedby="user-password"
                aria-invalid="false"
                inputIcons={[
                  {
                    element: showPassword ? (
                      <FaEye
                        className="cursor-pointer text-gold"
                        onClick={togglePasswordVisibility}
                      />
                    ) : (
                      <FaEyeSlash
                        className="cursor-pointer text-gold"
                        onClick={togglePasswordVisibility}
                      />
                    ),
                  },
                ]}
              />
              <Button
                className={"!px-16 lg:px-32"}
                disabled={isLoading}
                type="submit"
              >
                {t("signIn")}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
