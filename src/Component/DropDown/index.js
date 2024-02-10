import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { HeadingH5 } from '../Heading';


const DropDown = ({ array, text, icon, onLinkClick,BtnClass, textSize = 'font-semibold mt-0', alignment = 'left-0', toggleMenu, isOpen, ...otherProps }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

 

  return (
    <div className={`inline-block  ${textSize}`} >
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${BtnClass}`}
      >
        {text}
        {icon}
      </button>
      {isOpen && (
        <div 
          className={`fixed ${alignment} z-20 rounded-md shadow bg-primary-blue400 dark:bg-primary-white`} >
          {
            array.map((array, index) => (
          <div key={index}
          ref={dropdownRef}>
                <HeadingH5 className="mb-3" title={array.Category} />
                {array.items.map((items, index) => (
                  <div onClick={onLinkClick} key={index}>
                    <Link className='' href={items.href}  key={index}>
                      <div className="flex gap-3 md:gap-5 justify-between items-center rounded-md hover:bg-primary-blue300 hover:text-white px-2 py-2">
                        {items.title}
                        <div className='bg-blue-600 text-[10px] text-white py-1 px-2 rounded-full'>
                         {items.subtitle}
                        </div>
                      </div>
                    </Link>
                    
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default DropDown;
