import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/AuthProvider"
import {FaRegEdit} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import useAxios from "../../hooks/useAxios/useAxios"

const Profile = () => {
    const {newUser} = useContext(Context)
    const navigate = useNavigate()
    const [ref_id, setRef_id] =useState()
    const [refEmail, setRefEmail] = useState([])
    const [event, setEvent] = useState([])
    const rootAxios = useAxios()

    const email = newUser?.email;
    const usename = newUser?.displayName
    const userPhoto = newUser?.photoURL
 
    useEffect(()=>{
      rootAxios.get(`/user/email/${email}`)
      .then((res)=>setRef_id(res.data))
    },[])

    useEffect(()=>{
      rootAxios.get(`/event/registration/${email}`)
      .then(res=>setEvent(res.data))
    },[])
    useEffect(()=>{
      rootAxios.get(`/course/enrollment/ref_id/${ref_id}`)
      .then(res=>setRefEmail(res.data))
    },[ref_id,rootAxios])

    return (
    <div className="py-myMargin flex justify-center">
      <div>
        <div className="relative"><img className="w-56 h-56 rounded-lg border-4 border-gray-500" src={userPhoto} alt="" /> <FaRegEdit  onClick={()=>navigate("/edit-image")} className="absolute top-0 right-0 text-red-800 text-4xl"/></div>
        <div className="flex items-center gap-5 mt-10 mb-2"><p>Username: {usename}</p><FaRegEdit onClick={()=>navigate("/edit-username")} className="text-red-800 text-2xl"/></div>
        <p className="mb-2">Email: {email}</p>
        <p>Refer Id: {ref_id}</p>        
        <h4 className="text-xl mt-4 border-b-2 pb-2">Registered event</h4>
        {
          event?.length?event?.map((data, id)=><p key={id}>{id+1}. {data.event_name}</p>):<p>There is no event that you have registered</p>
        }
        <h4 className="text-xl mt-4 border-b-2 pb-2">You have refered</h4>
        {
          refEmail?.length? refEmail?.map((data, id)=><p key={id}>{id+1}. {data.email}</p>):<p>No one use your refer id</p>
        }

      </div>
    </div>
  )
}

export default Profile
