import { t } from "i18next";
import loginImage from "../../../assets/images/Login.png";
import Input from "../../../components/UI/Input/Input";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { FaEye, FaRegEyeSlash } from "react-icons/fa6";
import Button from "../../../components/UI/Button/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Login lg:h-screen bg-white">
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
        <form className="col-span-3">
          <div className="  flex  justify-center items-center md:ltr:rounded-l-3xl md:rtl:rounded-r-3xl flex-col gap-10 p-20  shadow-lg h-full  w-full ">
            <div className="UploadLogo rounded-full p-3   bg-gray w-28 h-28 flex items-center  justify-center">
              <label htmlFor="logo">
                <span>{t("Logo")}</span>
              </label>
              <input type="file" hidden id={"logo"} />
            </div>
            <Input
              placeholder={t("enter email")}
              type="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label={t("Email")}
              inputIcons={<CiMail />}
              className={``}
            />{" "}
            <Input
              type="password"
              placeholder={"••••••••"}
              className="placeholder:font-normal placeholder:text-xl placeholder:font-inter"
              id="password"
              autoComplete="password"
              required
              value={password}
              label={t("Enter password")}
              labelIcon={<MdLockOutline />}
              onChange={(e) => setPassword(e.target.value)}
              // minLength={8}
              inputIcons={[
                {
                  element: <FaRegEyeSlash className="text-gold" />,
                  type: "visibility",
                },
                {
                  element: <FaEye />,
                  type: "visibility",
                },
              ]}
            />
            <Button className={"!px-16 lg:px-32"}>{t("signIn")}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
