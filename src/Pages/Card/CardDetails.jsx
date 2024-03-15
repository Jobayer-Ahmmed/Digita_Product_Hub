import { Link, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const {
    _id,
    course_name,
    course_image,
    course_description,
    course_duration,
    course_fee,
  } = useLoaderData();
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
          <Link to={`/course/to-enroll/${_id}`}  className="btn btn-outline text-lg mt-8">Enroll Now</Link>
        </div>
    </div>
  );
};

export default CardDetails;
