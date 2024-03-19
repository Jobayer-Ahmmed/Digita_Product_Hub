import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgMenuCake } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../assets/logo/image-and-wrten-logo.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(true); 
  const { newUser, logOut } = useContext(Context);
  const navigate = useNavigate();

  const email = newUser?.email;

  const handleLogout = () => {
    logOut().then(() => navigate("/"));
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
    });
  }, []);

  const navlinks = (
    <>
      <li data-aos="zoom-in">
        <NavLink>Home</NavLink>
      </li>
      <li data-aos="zoom-in">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      {
        !email && <>
              <li data-aos="zoom-in">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li data-aos="zoom-in">
        <NavLink to="/register">Register</NavLink>
      </li>
        </>
      }
    </>
  );
  return (
    <div className="lg:px-20 px-[10%] flex items-center justify-between bg-gray-300 w-full h-16 text-gray-600  z-50 ">
      <div className=" flex items-center gap-5">
        <div className="block lg:hidden">
          {toggle ? (
            <button onClick={() => setToggle(!toggle)} className="">
              <CgMenuCake className="text-3xl" />
            </button>
          ) : (
            <button onClick={() => setToggle(!toggle)} className="">
              <RxCross2 className="text-3xl" />
            </button>
          )}
        </div>

        {/* logo */}
        <span><img className="w-36" src={logo1} alt="" /></span>
      </div>

      {/* drop down */}
      <div>
        <ul
          className={` z-10 absolute left-5  flex flex-col gap-5 rounded text-center p-10 bg-gray-300 shadow-2xl text-xl font-medium ${
            toggle
              ? "absolute -top-96 transition-[0.9]"
              : "  top-16 transition-[0.7]"
          }`}
        >
          {navlinks}
        </ul>
        <div className=" flex items-center  py-5 relative ">
          <div className="w-full flex justify-between">
            <div className="rounded text-lg hidden lg:block font-medium text-center text-gray-600 ">
              <ul className="flex justify-center gap-10">{navlinks}</ul>
            </div>
          </div>
        </div>
      </div>

          {/* user profile */}
      {email ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <img
              className="btn btn-circle w-12 h-12 rounded-full"
              src={newUser?.photoURL}
              alt=""
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] text-lg menu py-4 pl-10  bg-gray-300 shadow-2xl rounded-box w-52"
          >
            <li>{newUser.displayName}</li>
            <li onClick={()=>navigate("/profile")} className="cursor-pointer mt-3">Profile</li>
            <li onClick={handleLogout} className="cursor-pointer mt-3">
              Log Out
            </li>
          </ul>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Navbar;
