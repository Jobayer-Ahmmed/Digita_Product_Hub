import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditUsername = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit=(data)=>{
        console.log(data.username)
        updateProfile(auth.currentUser, {
            displayName: data.username
          }).then(()=>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Update Successfull",
                showConfirmButton: false,
                timer: 2000,
              })
              navigate("/profile")
          })
      }



  return (
    <div className="py-myMargin flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
            <h1 className="text-2xl text-center mb-5">Change your username</h1>
          <input
            type="text"
            placeholder="Username"
            {...register("username", {
              required: "Event Name is required",
            })}
            className="w-64 md:w-80 h-10 px-2 rounded "
          />
          {errors.username && (
            <p className="text-red-700">{errors.username.message}</p>
          )}
          <br />
          <input
            type="submit"
            value="Update"
            className="mt-3 btn bg-cyan-800 text-white"
          />
        </form>
    </div>
  )
}

export default EditUsername
