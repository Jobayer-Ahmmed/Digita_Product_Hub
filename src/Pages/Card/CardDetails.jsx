import { useContext, useEffect, useState } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthProvider";
import useAxios from "../../hooks/useAxios/useAxios";

const CardDetails = () => {
  const {
    _id,
    course_name,
    course_image,
    course_description,
    course_duration,
    course_fee,
  } = useLoaderData();
  const { newUser } = useContext(Context);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const navigate = useNavigate();
  const rootAxios = useAxios();
  const email = newUser?.email;

  useEffect(() => {
    if (email) {
      rootAxios.get(`/course/enrollment/${email}`).then((res) => {
        setIsEnrolled(res.data.some(data => data.course_name === course_name));
      });
    }
  }, [email, course_name]);

  const handleEnroll = () => {
    navigate(`/course/to-enroll/${_id}`);
  };

  return (
    <div className="flex justify-center items-center py-myMargin">
      <div className="w-full md:w-[500px] px-5">
        <img src={course_image} alt="" />
        <br />
        <h5 className="text-xl font-semibold">{course_name}</h5>
        <br />
        <p className="text-lg">Duration: {course_duration}</p>
        <p className="text-lg my-1">Fee: ${course_fee}</p>
        <p>{course_description}</p>
        {isEnrolled ? (
          <p className="text-red-800 mt-4">You have already enrolled in this course</p>
        ) : (
          <button onClick={handleEnroll} className="btn btn-outline text-lg mt-8">
            Enroll Now
          </button>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
