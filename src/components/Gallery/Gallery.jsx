import React from 'react'
import './Gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide1 from "../icons/alumina.jpeg";
import Slide2 from "../icons/alumina3.jpeg";
import Slide3 from "../icons/alumina1.jpeg";
import Slide4 from "../icons/alumina4.jpeg";
import Slide5 from "../icons/fire5.jpeg";
import Slide6 from "../icons/fire6.jpeg";
export default function Gallery() {
  return (
    <div className="gallery">
        <Carousel showArrows={true} showStatus={false} swipeScrollTolerance={10} swipeable={true}>
          <div className="Images">
            <img src={Slide1} alt="" />
          </div>
          <div className="Images">
            <img src={Slide2} alt="" />
          </div>
          <div className="Images">
            <img src={Slide3} alt="" />
          </div>
          <div className="Images">
            <img src={Slide4} alt="" />
          </div>
          <div className="Images">
            <img src={Slide5} alt="" />
          </div>
          <div className="Images">
            <img src={Slide6} alt="" />
          </div>
        </Carousel>
    </div>
  )
}
