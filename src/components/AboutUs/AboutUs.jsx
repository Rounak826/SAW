import React from "react";
import "./AboutUs.css";
import Info from "../assets/Info.svg";
import isologo from "../assets/isologo.png";
import AboutusImage from "../assets/AboutusImage.jpg";
import wall from "../icons/wall.png";
import brick from '../icons/brick.png'
import nopaint from '../icons/nopaint.png'
import home from '../icons/home.png'
import savetime from '../icons/savetime.png'
import rgb from '../icons/rgb.png'
import SatpuraSlideTwo from '../assets/SatpuraSlideTwo.jpeg'
export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUs_Image">
        <div className="container">
          <div className="row">
            <div className="bread-inner">
              <div className="bread-crumb-inner">
                <h2>ABOUT US</h2>
                <p>
                  {" "}
                  <a href="">
                    {" "}
                    <span className="Mods">Home </span>{" "}
                  </a>
                  . About Us{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs-Introduction-1">
        <p>
          <h1>
            Who We <span className="Mods">Are</span> ?
          </h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          neque animi quidem odio explicabo omnis nulla veniam a? Sapiente,
          libero cupiditate porro vero modi aliquid odio repellendus asperiores
          molestias quos. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Modi numquam fugiat hic tenetur eum saepe harum sint dolorem
          eligendi ratione officiis perferendis sunt blanditiis, quasi eos aut.
          Nisi, repudiandae inventore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus, necessitatibus ipsa. Incidunt harum
          nesciunt, adipisci ullam reiciendis vero, quae iusto officia
          reprehenderit, optio fuga repudiandae velit voluptatem explicabo rem
          voluptates!
        </p>

        <div className="AboutUs-SubImage">
          <img src={SatpuraSlideTwo} alt="" />
        </div>
      </div>
      <div className="Features">
        <div className="Features-Col-1">
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={wall} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Our Bricks Perform Well Left Exposed</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={brick} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Modularity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={nopaint} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Forget About Maintenance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="Features-Col-2">
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={home} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>TimeLess Beauty</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={savetime} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Time Saving</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={rgb} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>No Colour Pigment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs-QualityBuild">
        <div className="First">
          <h1>Quality Policy</h1>

          <p>
          We always & strictly follow the Quality Control Parameters as well defined in the ISO 9001:2000 system, right from Sourcing of raw materials up to production of finished goods. Special attention has always been given in sourcing of other accessories related to completion of turn-key projects.
          </p>
          <p>Apart from this we are also manufacturing & Testing our products as per Indian Standards(IS) & ASTM Procedures. This Further certify ours as a Quality manufacturer</p>
          <p>Behind each one of our quality products and services there is a dedicated team of highly trained engineers and technologist who ensure that we consistently provide the best is to offer.</p>
          <p>Our Quality Policy, Commits to comply with customer requirements and applicable standards as specified ISO 9001:2000.</p>
        </div>
        <div className="Iso-Logo">
          <img src={isologo} alt="" />
        </div>
      </div>

      <div className="Mission-Vision">
        <div className="Mission">
          <h1>
            {" "}
            <img src={Info} alt="" /> Mission
          </h1>
          <p>
          To become a Total Refractory Solutions Company by providing a comprehensive range of products and provide highest quality products & customer service. Strive to become a Technology and Market leader in the world. Be a leader in refractories and ceramics through continuous innovation, up gradation of product quality, introduction of new products and expansion of markets. Providing promising career and personal development opportunities to all employees. Achieve fair returns on capital employed by promoting productivity in all activities
          </p>
        </div>
        <div className="Vision">
          <h1>
            {" "}
            <img src={Info} alt="" /> Vision
          </h1>
          <p>
          Our aim is to provide timely supply and service after sale. We are very focused on quality, customer satisfaction and value for money. Our business philosophy dictates that we develop long-term relationship with the people we deal with.
          </p>
        </div>
      </div>
    </div>
  );
}
