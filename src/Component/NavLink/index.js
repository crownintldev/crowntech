
import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import { MdOutlineKeyboardArrowDown, } from "react-icons/md";
import MegaMenu from '../MegaMenu';
import DropDown from '../DropDown';



const Navlink = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    if (isDropDownOpen) setIsDropDownOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Link className='font-semibold' href="/" onClick={onClose}>
        Home
      </Link>
        <DropDown
          onLinkClick={onClose}
          toggleMenu={toggleDropDown}
          isOpen={isDropDownOpen}
          alignment="sm:text-start p-3 "
          text="About"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          array={[
            {
              items: [
                { id: "1",  title: "About Member", subtitle:"CEO",href: "/team" },
                { id: "2", title: "About Company", subtitle:"CROWN",href: "/about" },
                { id: "3", title: "Meet Our Team", subtitle:"CROWN TEAM",href: "/developer" },
                { id: "4", title: "Company Profile", subtitle:"PDF PROFILE",href: "/about" },
              ],
            },
          ]}
        />
        <MegaMenu
           toggleMenu={toggleMegaMenu}
           isOpen={isMegaMenuOpen}
          className={"  h-fit "}
          alignment="md:overflow-y-hidden z-50 overflow-y-scroll w-full gap-3 
           sm:text-start   "
          text="Service"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          
        />
       
      <Link className='font-semibold' href="/product" onClick={onClose}>
        Product
      </Link>
      <Link className='font-semibold' href="/contact" onClick={onClose}>
        Contact
      </Link>
    </>
  );
};

export default Navlink;
