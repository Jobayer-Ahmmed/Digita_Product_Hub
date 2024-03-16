import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios/useAxios";

const ToEnroll = () => {
  const { course_name, course_fee } = useLoaderData();
  const { newUser, handleStore,  handleRefId, refId } = useContext(Context);
  const [errMsg, setErrMsg] = useState();
  const [ref_id, setRef_id] = useState();
  const navigate = useNavigate();
  const rootAxios = useAxios();
  const email = newUser?.email;
  const username = newUser?.displayName;
  const {
    register,
    handleSubmit,
    watch
  } = useForm();

  const inserted_ref_id = watch("inserted_ref_id")
  handleRefId(inserted_ref_id)

  const onSubmit = (data) => {
    const { course_name, course_fee } = data;
    handleStore(username, email, course_name, course_fee, refId)
    if(inserted_ref_id==""){      
      navigate("/course/conform-payment")
    } else{
      rootAxios.get(`/user/${inserted_ref_id}`)
      .then(() => {
        if (ref_id === parseInt(inserted_ref_id)) {
          setErrMsg(
            `You can't use your own reffer id \nCollect anoter user reffer id or, \nDon't use reffer id.\nRefer id is optional`
          );
        } else {
          
          navigate("/course/conform-payment")
        }
      }).catch(()=>setErrMsg(`Invalid reffer id.\nCollect correct reffer id or, \nDon't use reffer id.\nRefer id is optional`))
    }
  };

  useEffect(() => {
    rootAxios.get(`/user/email/${email}`).then((res) => setRef_id(res.data));
  }, []);

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
          <p>Reffer Id</p>
          <input
            type="text"
            placeholder="Reffer Id(if you have)"
            {...register("inserted_ref_id")}
            className="w-64 md:w-80 h-10 px-2 rounded mb-4"
          />
          <br />
          {errMsg && (
  <div className="text-red-500 text-lg">
    {errMsg.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ))}
  </div>
)}

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
