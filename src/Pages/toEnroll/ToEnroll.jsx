import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { Context } from "../../context/AuthProvider"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


const ToEnroll = () => {
    const {course_name, course_fee} = useLoaderData()
    const {newUser, handleStore} = useContext(Context)
    const navigate = useNavigate()
    const email = newUser?.email
    const username = newUser?.displayName
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { course_name, course_fee } = data;
    // rootAxios.post("/admin/dashboard/course", { course_name, course_description })
    // .then(()=>{
    //   Swal.fire({
    //     position: "center",
    //     icon: "success",
    //     title: "Add Successfull",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   })
    //   reset()
    // })

    handleStore(username, email, course_name, course_fee)
    navigate("/course/conform-payment")

  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div className="py-myMargin flex justify-center " data-aos="fade-left">
      <div className="p-10 border rounded-lg shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
        <p>Name</p>
          <input
            type="text"
            value={username}
            {...register("username")}
            className="w-64 md:w-80 h-10 px-2 rounded mb-4"
          />
          <br />
          <p>Email</p>
          <input
            type="email"
            value={email}
            {...register("email")}
            className="w-64 md:w-80 h-10 px-2 rounded mb-4"
          />
          <br />
          <p>Course Name</p>
          <input
            type="text"
            value={course_name}
            {...register("course_name")}
            className="w-64 md:w-80 h-10 px-2 rounded mb-4"
          />
          <br />
          <p>Course Fee($)</p>
          <input
            type="text"
            value={course_fee}
            {...register("course_fee")}
            className="w-64 md:w-80 h-10 px-2 rounded mb-4"
          />
          <br />

          <input
            type="submit"
            value="Next"
            className="mt-10 btn bg-cyan-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default ToEnroll;
