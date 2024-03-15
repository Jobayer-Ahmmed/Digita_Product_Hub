import { Link } from "react-router-dom";
import "./card.css";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import useAxios from "../../hooks/useAxios/useAxios";


const Card = ({ title}) => {
  const [allData, setAllData] = useState([])
  const rootAxios = useAxios()
  useEffect(()=>{
    rootAxios.get("/admin/dashboard/course")
    .then(res=>setAllData(res.data))
  },[])

  return (
    <div className="mb-myMargin px-xPadding2 md:px-xPadding">
      <h1 className="text-4xl font-medium text-center mb-titleMargin">
        {title}
      </h1>
      <div className="flex justify-center text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allData?.map((data) => (
            <div
              key={data._id}
              className="project relative border-2 bg-gradient-to-t rounded-lg shadow-lg p-10 flex flex-col justify-between items-center"
            >
              <div className="project_img">
                <img src={data.course_image} className="w-full h-56" alt="" />
                <h3 className="my-3 text-xl font-bold">{data.course_name}</h3>
              </div>
              <div className="project_info_parent w-full h-full absolute rounded-lg top-0 bg-transparent "></div>
              <div className="project_info absolute p-5">
                <Link to={`/course/${data._id}`} className="btn btn-outline text-lg">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes={
  title: PropTypes.string
}

export default Card
