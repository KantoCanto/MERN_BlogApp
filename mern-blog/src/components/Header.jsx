import { useState } from 'react';
import React from 'react';
import {images} from '../constants';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {MdKeyboardArrowDown} from "react-icons/md";

//an array filled with objects that stores the navItems
const navItemsInfo = [
  {name: "Home", type: "link"},
  {name: "Articles", type: "link"},
  {name: "Pages", type: "dropdown", items:["About Us", "Contact Us"]},
  {name: "Pricing", type: "link"},
  {name: "FAQ", type: "link"}
]

//template for each navItem
const NavItem = ({item}) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2 group-hover:text-orange-800">
            {item.name}
          </a>
          <span className="text-orange-800 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a href="/" className="px-4 py-2 flex gap-x-1 items-center group-hover:text-orange-800">
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </a>
          <div className="hidden transition-all duration-300 pt-4 absolute bottom-0 rigth-0 transform translate-y-full group-hover:block w-max">
            <ul className="flex flex-col shadow-lg rounded-lg ">
              {item.items.map((page) => (
                <a
                  href="/"
                  className=" hover:text-dark-soft px-4 py-2 lg:bg-transparent"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {

  //define a state for making navItems visible
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) =>{
      //takes in the current state and changes it to the opposite
      return !curState;
    })
  }

  return (
    <div>
      <section>
        <header className="container mx-auto px-5 flex justify-between py-4 items-center">
          <div>
            <img className="w-16" src={images.logo} alt="logo" />
          </div>
          <div className='lg:hidden z-50'>
            {navIsVisible ? (<AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler}/>) : (<AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler}/>) }
          </div>
          <div className={`${
            navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-200 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-centered`}>
            
            <ul className="text-white gap-y-4  lg:text-dark-hard flex flex-col lg:flex-row gap-x-2 font-semibold items-center">
              {navItemsInfo.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
              <button className="border-2 border-orange-800 px-6 py-2 rounded-full text-orange-800 font-semibold hover:bg-orange-300 hover:text-white hover:border-orange-300 transition-all duration-200">
                Sign In
              </button>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header
