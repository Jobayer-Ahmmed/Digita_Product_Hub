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

const EditEvent = () => {
  const {event_name, event_image, event_description} = useLoaderData()
  const {id} = useParams()

  const navigate = useNavigate()
  const rootAxios = useAxios()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      event_name, event_image, event_description
    }
  });

  const onSubmit = (data) => {
    const { event_name,event_image, event_description } = data;

    const imageFile = { image: event_image[0] };

    axios
      .post(image_upload_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
          if (res) {
            rootAxios.put(`/admin/dashboard/event/${id}`, { event_name,event_image:res.data.data.display_url, event_description })
            .then(()=>{
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Update Successfull",
                showConfirmButton: false,
                timer: 2000,
              })
              navigate("/admin/dashboard/event")
            })
          }
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="mb-myMargin flex justify-center " data-aos="fade-down">
      <div className="p-10 border rounded-lg shadow-xl">
        <h2 className="text-2xl font-medium pb-3 border-b mb-5">
          Give the Event Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
          <input
            type="text"
            placeholder="Event Name"
            {...register("event_name", {
              required: "Event Name is required",
            })}
            className="w-64 md:w-80 h-10 px-2 rounded "
          />
          {errors.event_name && (
            <p className="text-red-700">{errors.event_name.message}</p>
          )}
          <br />
          <p className="mt-2 -mb-6" htmlFor="">
            Event Image
          </p>
          <br />
          <input
            type="file"
            {...register("event_image", {
              required: "Event Image is required",
            })}
            className="file-input file-input-bordered w-64 md:w-80 h-10 text-white"
          />
          {errors.event_image && (
            <p className="text-red-700">{errors.event_image.message}</p>
          )}
          <br />
          <textarea
            placeholder="Event Description"
            {...register("event_description", {
              required: "Event Description is required",
            })}
            className="w-64 md:w-80 h-40 px-2 mt-4 rounded "
          />
          {errors.event_description && (
            <p className="text-red-700">{errors.event_description.message}</p>
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

export default EditEvent;

