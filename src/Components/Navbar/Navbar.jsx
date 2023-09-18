import axios from "axios";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  // define a state
  const [menues, setMenues] = useState([]);
  // useEffect for menu
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("./Api/MenuData.js");
        setMenues(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  // toggle menu state
  const [humber, setHumber] = useState(false);

  console.log(humber);
  return (
    <>
      <div
        onClick={() => {
          setHumber(!humber);
        }}
        className="md:hidden z-50	 block humber mt-5 ml-4 text-white text-4xl cursor-pointer  "
      >
       {
        humber ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>

       } 

      </div>

      <nav
        className={` 
        absolute top-2  ${humber ? "left-20" : "-left-[80rem]"}
        duration-700 ease-out-back
        md:relative md:top-0 md:left-0
        w-10/12 h-full border pt-9 items-center
        
        z-10 md:w-10/12 py-3 flex flex-col md:flex-row md:items-center mx-auto md:justify-between  `}
      >
        <div className="sr-logo mb-5  w-[10rem] xl:w-[15rem]  lg:w-[20rem]">
          <a href="">
            <img
              className="w-full h-full object-cover "
              src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.944c5d0ef628083bb316f9b3d643385c86bcdb3d.svg"
              alt="logo"
            />
          </a>
        </div>

        <div className="menu ">
          <ul className="md:flex text-xl lg:text-2xl  ">
            {menues.map((menu, id) => (
              <Menu menu={menu} key={id}></Menu>
            ))}
          </ul>
        </div>

        <div className="header-aciton">
          <button className="btn hidden lg:block btn-primary">Contact</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
