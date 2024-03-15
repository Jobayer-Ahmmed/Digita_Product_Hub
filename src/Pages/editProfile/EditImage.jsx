import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const image_upload_key = import.meta.env.VITE_image_uploaded_key
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;
const EditImage = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit=(data)=>{
        const imageFile = { image: data.photo[0] };
        axios
        .post(image_upload_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data.data.display_url);
          updateProfile(auth.currentUser, {
            photoURL: res.data.data.display_url
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
        })

      }



  return (
    <div className="py-myMargin flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-3">
            <h1 className="text-2xl text-center mb-5">Change your photo</h1>
            <input
            type="file"
            {...register("photo", {
              required: "Photo is required",
            })}
            className="file-input file-input-bordered w-64 md:w-80 h-10 text-white"
          />
          {errors.photo && (
            <p className="text-red-700">{errors.photo.message}</p>
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

export default EditImage
