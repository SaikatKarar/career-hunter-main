import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from './../Button/Button';
import { navigation } from './../../constants/index';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm ${openNavigation ? 'bg-slate-500 h-screen' : 'bg-[#f9f9ff]'}`}
    >

      <div className="max-w-6xl m-auto flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <NavLink to="/" className="block w-[12rem] xl:mr-8">
          <span className="font-bold text-3xl text-[#191919]">CareerHunter</span>
        </NavLink>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            }
             fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation && navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.url}
                className={(e) => [
                  e.isActive ? "text-red-200 font-bold" : "",
                  "block relative text-lg text-[#191919]/70 transition-colors hover:text-color-1",
                  item.onlyMobile ? "lg:hidden" : "",
                  "px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold"
                ].filter(Boolean).join(" ")}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="hidden lg:flex">
          <Button>
            Star Applying
          </Button>
        </div>
        <div className="ml-auto lg:hidden">
          <Button
            px="px-3"
            onClick={toggleNavigation}
          >
            {openNavigation ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;