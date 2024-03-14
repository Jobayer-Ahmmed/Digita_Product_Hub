
import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"
import Discount from "../Discount/Discount"
import Card from "../../Card/Card"

const Home = () => {
  const title = "Our Courses"
  return (    
    <div className="-z-20">
      <Banner/>
      <Discount/>
      <Card title={title}/>
      <Outlet/>

    </div>
  )
}

export default Home