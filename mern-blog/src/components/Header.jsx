import { useState } from 'react';
import React from 'react';
import {images} from '../constants';


const navItemsInfo = [
  {name: "Home"},
  {name: "Articles"},
  {name: "Pages"},
  {name: "Pricing"},
  {name: "FAQ"}
]

const NavItem = ({name}) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2 group-hover:text-orange-800">
        {name}
      </a>
      <span className="text-orange-800 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {

  //define a state for making navItems visible
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) =>{
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
          <div className={`${
            navIsVisible ? "right-0" : "-right-full"
            } flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-centered`}>
            <ul className="flex gap-x-2 font-semibold">
              {navItemsInfo.map((item) => (
                <NavItem key={item.name} name={item.name} />
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
