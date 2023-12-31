import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { LiaBarsSolid  } from "react-icons/lia";
export const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <>
      <nav>
        <div className="flex justify-between md:justify-around items-center mx-2 -mt-32">
          <a href="/">
            <img src="/logo.png" alt="Mari The Barber" className="w-16 md:w-24" />
          </a>
          <ul className="gap-5 text-lg hidden md:flex">
            <li className="hover:underline ">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:underline ">
              <a href="#servicios">SERVICIOS</a>
            </li>
            <li className="hover:underline ">
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
          <span
            className="text-2xl md:hidden"
            onClick={() => setNavState(!navState)}
          >
            {navState ? <GoChevronRight /> : <LiaBarsSolid />}
          </span>
        </div>
        {navState && (
          <ul className="flex flex-col items-end mr-3 my-3 gap-3">
            <li className="active:underline ">
              <a href="#home">HOME</a>
            </li>
            <li className="active:underline ">
              <a href="#servicios">SERVICIOS</a>
            </li>
            <li className="active:underline ">
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};
