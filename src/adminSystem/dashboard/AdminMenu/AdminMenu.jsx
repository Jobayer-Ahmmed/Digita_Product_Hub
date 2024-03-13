import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <aside className="flex justify-center items-center w-full lg:w-56 rounded-md px-4 py-10 bg-adminColor text-lg font-medium">
      <div className="flex flex-col  gap-1">
        <NavLink className="text-gray-100">Dashboard</NavLink>
        <NavLink className="text-gray-100">Courses</NavLink>
        <NavLink className="text-gray-100">Enrolled</NavLink>
        <NavLink className="text-gray-100">Users</NavLink>
        <NavLink className="text-gray-100">Referrals</NavLink>
        <NavLink className="text-gray-100">Sales Analytics</NavLink>
        <NavLink className="text-gray-100">Logout</NavLink>
      </div>
    </aside>
  );
};

export default AdminMenu;
