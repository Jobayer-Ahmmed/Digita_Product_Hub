import { Outlet } from "react-router-dom"
import AdminMenu from "../AdminMenu/AdminMenu"


const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div><AdminMenu/></div>
      <Outlet/>
    </div>
  )
}

export default Dashboard
