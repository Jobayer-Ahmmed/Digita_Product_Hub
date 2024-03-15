import { useContext } from "react"
import { Context } from "../../context/AuthProvider"
import {FaRegEdit} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const {newUser} = useContext(Context)
    const navigate = useNavigate()
    const email = newUser?.email;
    const usename = newUser?.displayName
    const userPhoto = newUser?.photoURL
    console.log(usename)



    return (
    <div className="py-myMargin flex justify-center">
      <div>
        <div className="relative"><img className="w-56 h-56 rounded-lg border-4 border-gray-500" src={userPhoto} alt="" /> <FaRegEdit  onClick={()=>navigate("/edit-image")} className="absolute top-0 right-0 text-red-800 text-4xl"/></div>
        <div className="flex items-center gap-5 mt-10 mb-2"><p>Username: {usename}</p><FaRegEdit onClick={()=>navigate("/edit-username")} className="text-red-800 text-2xl"/></div>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Profile
