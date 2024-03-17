import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <aside className="flex justify-center items-center w-full lg:w-56 rounded-md px-4 py-10 bg-adminColor text-lg font-medium">
      <div className="flex flex-col  gap-1">
        <NavLink className="text-gray-100">Dashboard</NavLink>
        <NavLink to="/admin/dashboard/course" className="text-gray-100">See Courses</NavLink>
        <NavLink to="/admin/dashboard/course/add" className="text-gray-100">Add Course</NavLink>
        <NavLink to="/admin/dashboard/event" className="text-gray-100">See Event</NavLink>
        <NavLink to="/admin/dashboard/event/add" className="text-gray-100">Add Event</NavLink>
        <NavLink className="text-gray-100">Sales Analytics</NavLink>
        <NavLink to="/admin/dashboard/enrollment"  className="text-gray-100">Enrollment Details</NavLink>
        <NavLink className="text-gray-100">Logout</NavLink>
      </div>
    </aside>
  );
};

export default AdminMenu;
