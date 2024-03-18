import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../../context/AuthProvider";

const AdminMenu = () => {
  const {logOut } = useContext(Context);
  const navigate = useNavigate()
  const handleAdminLogout=()=>{
    logOut().then(() => navigate("/admin"));
  }
  return (
    <aside className="flex justify-center items-center w-full lg:w-56 rounded-md px-4 py-10 bg-adminColor text-lg font-medium">
      <div className="flex flex-col  gap-1">
        <NavLink to="/admin/dashboard" className="text-gray-100">Home</NavLink>
        <NavLink to="/admin/dashboard/course" className="text-gray-100">See Courses</NavLink>
        <NavLink to="/admin/dashboard/course/add" className="text-gray-100">Add Course</NavLink>
        <NavLink to="/admin/dashboard/event" className="text-gray-100">See Event</NavLink>
        <NavLink to="/admin/dashboard/event/add" className="text-gray-100">Add Event</NavLink>
        <NavLink to="/admin/dashboard/enrollment-details"  className="text-gray-100">Enrollment Details</NavLink>
        <NavLink to="/admin/dashboard/event-details" className="text-gray-100">Event Details</NavLink>
        <NavLink onClick={handleAdminLogout} className="text-gray-100">Logout</NavLink>

      </div>
    </aside>
  );
};

export default AdminMenu;
