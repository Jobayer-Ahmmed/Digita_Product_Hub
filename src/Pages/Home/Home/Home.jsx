
import { Outlet } from "react-router-dom"
import Banner from "../Banner/Banner"
import Card from "../../Card/Card"

const Home = () => {
  const title = "Our Courses"
  return (    
    <div className="-z-20">
      <Banner/>
      <Card title={title}/>
      <Outlet/>

    </div>
  )
}

export default Home