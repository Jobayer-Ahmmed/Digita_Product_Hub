import { Link, useLoaderData } from "react-router-dom"


const CardDetails = () => {
    const allData = useLoaderData()
  return (
    <div>
      <div>
        {
            allData?.map(({_id, course_name, course_image,course_description,course_duration, course_fee})=><div key={_id}>
                <img src={course_image} alt="" /><br />
                <h5>{course_name}</h5><br />
                <p>Duration: {course_duration}</p><br />
                <p>Fee: ${course_fee}</p><br />
                <p>{course_description}</p>
                <Link to="">Enroll Now</Link>
            </div>)
        }
      </div>
    </div>
  )
}

export default CardDetails
