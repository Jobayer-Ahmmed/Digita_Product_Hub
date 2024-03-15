import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import axios from "axios";
import useAxios from "../../../hooks/useAxios/useAxios";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const image_upload_key = import.meta.env.VITE_image_uploaded_key;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;

const EditCourse = () => {
  const {course_name, course_image, course_description} = useLoaderData()
  const {id} = useParams()

  const navigate = useNavigate()
  const rootAxios = useAxios()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      course_name, course_image, course_description
    }
  });

  const onSubmit = (data) => {
    const { course_name,course_image, course_description } = data;

    const imageFile = { image: course_image[0] };

    axios
      .post(image_upload_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
          if (res) {
            rootAxios.put(`/admin/dashboard/course/${id}`, { course_name,course_image:res.data.data.display_url, course_description })
            .then(()=>{
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Update Successfull",
                showConfirmButton: false,
                timer: 2000,
              })
              navigate("/admin/dashboard/course")
            })
          }
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <div className="mb-myMargin flex justify-center " data-aos="fade-left">
      <div className="p-10 border rounded-lg shadow-xl">
        <h2 className="text-2xl font-medium pb-3 border-b mb-5">
          Give the course information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
          <input
            type="text"
            placeholder="Course Name"
            {...register("course_name", {
              required: "Course Name is required",
            })}
            className="w-64 md:w-80 h-10 px-2 rounded "
          />
          {errors.course_name && (
            <p className="text-red-700">{errors.course_name.message}</p>
          )}
          <br />
          <p className="mt-2 -mb-6" htmlFor="">
            Course Image
          </p>
          <br />
          <input
            type="file"
            {...register("course_image", {
              required: "Course Image is required",
            })}
            className="file-input file-input-bordered w-64 md:w-80 h-10 text-white"
          />
          {errors.course_image && (
            <p className="text-red-700">{errors.course_image.message}</p>
          )}
          <br />
          <textarea
            placeholder="Course Description"
            {...register("course_description", {
              required: "Course Description is required",
            })}
            className="w-64 md:w-80 h-40 px-2 mt-4 rounded "
          />
          {errors.course_description && (
            <p className="text-red-700">{errors.course_description.message}</p>
          )}
          <br />
          <input
            type="submit"
            value="Update"
            className="mt-10 btn bg-cyan-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default EditCourse;

