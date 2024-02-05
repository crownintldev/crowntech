import React from "react";
import { FaHouseChimneyUser } from "react-icons/fa6";
import DropDown from "../DropDown";
import Logo from "../Logo";
import { FaBarsStaggered } from "react-icons/fa6";
import Switcher from "../Switcher";

const SideNav = ({ onClose, setCollapsed, collapsed }) => {

  return (
    <div
      className={`w-full flex justify-between shadow items-center px-3 bg-primary-blue500  dark:bg-primary-white
      `}
    >
      <div className="flex gap-3 items-center">
        <FaBarsStaggered
          className={`cursor-pointer text-2xl text-white dark:text-black`}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Logo />
      </div>

      <div className="flex gap-3 items-center ">
        <Switcher/>
        <DropDown
          onLinkClick={onClose}
          alignment="right-0 p-1 leading-none"
          BtnClass="mt-6"
          icon={
            <FaHouseChimneyUser
              className={`cursor-pointer text-2xl text-white dark:text-black`}
            />
          }
          array={[
            {
              items: [
                { id: "1", title: "Member", subtitle: "CEO", href: "/team" },
                {
                  id: "2",
                  title: "Company",
                  subtitle: "CROWN",
                  href: "/about",
                },
                {
                  id: "3",
                  title: "Logout",
                  subtitle: "Logout",
                  href: "/login",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SideNav;
