
import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"
import Discount from "../Discount/Discount"

const Home = () => {


  return (
    <div className="-z-20">
      <Banner/>
      <Discount/>
      <Outlet/>

    </div>
  )
}

export default Home