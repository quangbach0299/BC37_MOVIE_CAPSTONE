/* eslint-disable jsx-a11y/anchor-is-valid */
import { Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    console.log(value);
    i18n.changeLanguage(value);
  };

  return (
    <header
      className="p-4 bg-white text-black fixed w-full top-0 z-10"
      style={{
        height: "96",
        width: "1950",
        // backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <div className="  flex justify-around h-16 mx-auto">
        <Link
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            alt=""
            src={"https://i.imgur.com/lC22izJ.png"}
            width={60}
            height={60}
          />
        </Link>
        <ul className="items-stretch hidden space-x-3 mt-4 lg:flex">
          <li className="flex">
            {/* <Link className='hover:text-red-600'> Lịch Chiếu</Link> */}
            <a href="#footer" className="hover:text-red-600">
              Lịch Chiếu
            </a>
          </li>
          <li className="flex">
            <Link href="#" className="hover:text-red-600">
              Cụm Rạp
            </Link>
          </li>
          <li className="flex">
            <Link to={"contact"} className="hover:text-red-600">
              Tin Tức
            </Link>
          </li>
          <li className="flex">
            <Link className="hover:text-red-600">Ứng Dụng</Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/user/login"
            className={({ isActive }) => {
              if (isActive) return "text-yellow-200 text-lg";
              return "text-lg";
            }}
            style={{ textDecoration: "none" }}
          >
            {t("SignIn")}
          </NavLink>
          <span className="text-lg mx-3"> |</span>
          <NavLink
            to="/signup"
            className="text-lg"
            style={{ textDecoration: "none" }}
          >
            {t("SignOut")}
          </NavLink>
          <Select
            defaultValue="Eng"
            style={{ width: "120", marginLeft: "30px" }}
            onChange={handleChange}
            options={[
              {
                value: "en",
                label: "Eng",
              },
              {
                value: "cn",
                label: "Chi",
              },
              {
                value: "vi",
                label: "Vie",
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
};
