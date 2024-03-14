import {FaUsers} from "react-icons/fa"
import {GiNotebook} from "react-icons/gi"


const DashboardHome = () => {
  return (
    <div>
      <div className="bg-base-300 p-10 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-8 md:gap-0 ">
            <h1 className="text-7xl  font-bold text-gray-600">
              <FaUsers />
            </h1>
            <h1 className="text-2xl  font-medium text-gray-600"> Users</h1>
          </div>
          <div>
            <h3 className="text-xl  font-medium text-gray-600">
              Total Users : 0
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-base-300 mt-8 p-10 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-8 md:gap-0 ">
            <h1 className="text-7xl  font-bold text-green-600">
             <GiNotebook/>
            </h1>
            <h1 className="text-2xl  font-medium text-gray-600"> Enrolled</h1>
          </div>
          <div>
            <h3 className="text-xl  font-medium text-gray-600">
              Total Enrolled: 0
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
