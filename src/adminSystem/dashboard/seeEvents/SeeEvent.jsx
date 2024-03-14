import { Link } from "react-router-dom";
import "./seeEvent.css";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Swal from "sweetalert2";


const SeeEvent= () => {
  const [allData, setAllData] = useState([])
  const rootAxios = useAxios()
  
  const handleDelete=(id)=>{
    rootAxios.delete(`/admin/dashboard/event/${id}`)
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Delete Successfull",
        showConfirmButton: false,
        timer: 2000,
      })
    })
  }

  useEffect(()=>{
    rootAxios.get("/admin/dashboard/event")
    .then(res=>setAllData(res.data))
  },[rootAxios])

  return (
    <div className="mb-myMargin px-xPadding2 md:px-xPadding">
      <h1 className="text-4xl font-medium text-center mb-titleMargin">
        Events
      </h1>
      <div className="flex justify-center text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allData?.map((data) => (
            <div
              key={data._id}
              className="project relative border-2 bg-gradient-to-t rounded-lg shadow-lg p-10 flex flex-col justify-between items-center"
            >
              <div className="project_img">
                <img src={data.event_image} className="w-full h-56" alt="" />
                <h3 className="my-3 text-xl font-bold">{data.event_name}</h3>
              </div>
              <div className="project_info_parent w-full h-full absolute rounded-lg top-0 bg-transparent "></div>
              <div className="project_info absolute p-5">
                <Link to={`/admin/dashboard/event/${data._id}`} className="btn btn-outline text-lg">
                  Edit
                </Link>
                <Link onClick={()=>handleDelete(data._id)} className="btn btn-outline text-lg ml-10">
                  Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SeeEvent
