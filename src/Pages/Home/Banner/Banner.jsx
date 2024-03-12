import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import mern from "../../../assets/banner/mern.png"
import react from "../../../assets/banner/react.png"
import node from "../../../assets/banner/node.png"
import dj from "../../../assets/banner/dj.png"


const Banner = () => {
  return (
<div className="text-center">
<Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
    <div>
        <img src={mern}/>
    </div>
    <div>
        <img src={react} />
    </div>
    <div>
        <img src={node} />
    </div>
    <div>
        <img src={dj} />
    </div>
</Carousel>
</div>
  )
}

export default Banner