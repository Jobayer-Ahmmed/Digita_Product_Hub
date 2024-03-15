import { useContext } from "react"
import { Context } from "../../context/AuthProvider"

const Profile = () => {
    const {newUser} = useContext(Context)
    const email = newUser?.email;
    const usename = newUser?.displayName
    const userPhoto = newUser?.photoURL
    console.log(usename)
    return (
    <div className="py-myMargin flex justify-center">
      <div>
        <img className="w-56 h-56 rounded-lg border-4 border-gray-500" src={userPhoto} alt="" />
        <p className=" mt-10 mb-2">Username: {usename}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Profile
