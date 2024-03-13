import { Outlet } from "react-router-dom"


const AdminPanel = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-myMargin">Admin Panel</h1>
      <Outlet/>
    </div>
  )
}

export default AdminPanel
