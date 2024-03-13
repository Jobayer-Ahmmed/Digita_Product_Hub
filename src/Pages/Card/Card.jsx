import { Link } from "react-router-dom";
import "./card.css";

const MyProjects = () => {
  const cardArr = [
    {
      image: "https://i.ibb.co/sp7fp7r/mern.png",
      title: "MERN Stack Development",
    },
    {
      image: "https://i.ibb.co/8dsCkn1/react.png",
      title: "React JS Devlopment",
    },
    {
      image: "https://i.ibb.co/KVzX5F2/node.png",
      title: "Node JS Development",
    },
    { image: "https://i.ibb.co/5GSVc5p/dj.png", title: "Django Development" },
  ];
  return (
    <div className="pt-myMargin px-xPadding2 md:px-xPadding">
      <h1 className="text-4xl font-medium text-center mb-titleMargin">
        Our Courses
      </h1>
      <div className="flex justify-center text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardArr.map((data, id) => (
            <div
              key={id}
              className="project relative border-2 bg-gradient-to-t rounded-lg shadow-lg p-10 flex flex-col justify-between items-center"
            >
              <div className="project_img">
                <img src={data.image} className="w-full h-56" alt="" />
                <h3 className="my-3 text-xl font-bold">{data.title}</h3>
              </div>
              <div className="project_info_parent w-full h-full absolute rounded-lg top-0 bg-transparent ">
              </div>
              <div className="project_info absolute p-5">
                  <p className=" mb-6 text-lg">{data.info}</p>
                  <Link to={data.link} className="btn btn-outline text-lg">
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

export default MyProjects;
