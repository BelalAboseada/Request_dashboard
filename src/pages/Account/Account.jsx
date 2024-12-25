import { t } from "i18next";
import Button from "../../components/UI/Button/Button";
import avatar from "../../assets/images/avatar.png";
import UiInput from "../../components/UI/Input/UIInput";
import { Link } from "react-router-dom";
import "./style.scss"


export function CheckInput({ checked, onChange }) {
  return (
    <div className="toggle">
      <label className="label">
        <input
          className="toggle-state"
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <div className="toggle">
          <div className="indicator"></div>
        </div>
      </label>
    </div>
  );
}

const Account = () => {
  return (
    <div className="Account p-2 lg:p-4">
      <div className="wrapper bg-white rounded-xl p-4 m-2">
        <div className="head flex justify-between items-center">
          <p className="font-semibold text-base">{t("Access & Security")}</p>
          <div className="saveChanges hidden lg:block">
            <Button
              className={"!px-12 font-medium"}
              //   onClick={handleSaveChanges}
            >
              {t("Save Changes")}
            </Button>
          </div>
        </div>
        <hr className="my-2" />
        <div className="">
          <div className="flex flex-col">
            <div className="avatar  my-2 col-span-2 relative ">
              <img
                src={avatar}
                alt="avatar"
                className="rounded-full  w-24 h-24 object-contain relative border border-solid  border-gray p-2"
              />
            </div>
          </div>

          <form className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col my-2 col-span-2 ">
              <UiInput
                type="text"
                id="name"
                label={t("yourName")}
                value={"Admin here"}
                // onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col my-2 col-span-2">
              <UiInput
                type="text"
                label={t("Work rank")}
                id="Work rank"
                value={"Admin"}
                disabled
              />
            </div>
            <div className="flex flex-col my-2 col-span-2 ">
              <UiInput
                type="email"
                id="email"
                value={"Admin@gmail.com"}
                disabled
                label={t("Email")}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col my-2 col-span-2 ">
              <UiInput
                type="password"
                id="password"
                value={"........."}
                disabled
                label={t("Password")}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder=""
              />
            </div>
          </form>
        </div>
        <div className="border border-gray  rounded-2xl mt-4 p-2">
          <div className="email flex items-center  justify-between   m-2  ">
            <p className="text-xs md:text-sm lg:text-base">
              {t("Sign-in Email")}
            </p>
            <span className="text-xs md:text-sm lg:text-base">
              {"admin@gmail.com"}
            </span>
          </div>
          <div className="changePassword flex items-center  justify-between   m-2 mt-8">
            <p className="text-xs md:text-sm lg:text-base">{t("Password")}</p>
            <Link to={"/"} className="text-xs md:text-sm lg:text-base">
              <button className="btn  text-gold">{t("Change password")}</button>
            </Link>
          </div>
          <hr className="m-2 " />
          <div className="twoFactor flex items-center  justify-between   mx-2 my-4">
            <p className="text-xs md:text-sm lg:text-base">
              {t("2-FA authentication")}
            </p>
            <CheckInput />
          </div>
          <div className="Phone flex items-center  justify-between   mx-2 mt-8 mb-2">
            <p className="text-xs md:text-sm lg:text-base">
              {" "}
              {t("Phone number")}
            </p>
            <span className="text-xs md:text-sm lg:text-base">01111111111</span>
          </div>
          <hr className="m-2 " />
          <div className="LastSignIn mx-2 mt-4 mb-8">
            <p className="text-xs md:text-sm lg:text-base">
              {t("Last Sign-in")}
            </p>
            <span className="text-xs md:text-sm lg:text-base">
              today at 18:34, IP 198.123.23.23
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
