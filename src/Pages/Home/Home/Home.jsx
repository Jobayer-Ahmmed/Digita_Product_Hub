
import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"
import Discount from "../Discount/Discount"
import Card from "../../Card/Card"

const Home = () => {


  return (
    <div className="-z-20">
      <Banner/>
      <Discount/>
      <Card/>
      <Outlet/>

    </div>
  )
}

export default Home