import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, PhoneCall, Youtube } from "react-feather";
export const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="Row">
          <div className="logo">
            <img src={logo} alt="" />
            <h4>Satpura Acid Ware & Stone Ware Pipes</h4>
          </div>
          <div className="quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/AboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact Us:</h3>
            <div className="column">
              
            <div className="row">
            <a
              href="https://www.facebook.com/areradentalclinic/"
              target={"_blank"}
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://youtube.com/c/drswapniljain18"
              target={"_blank"}
              rel="noreferrer"
            >
              <Youtube />
            </a>
            <a
              href="https://instagram.com/arera_dental_care?utm_medium=copy_link"
              target={"_blank"}
              rel="noreferrer"
            >
              <Instagram />
            </a>
            </div>
           
            <div className="Col">
              <a href="tel:+91 9425152102"><PhoneCall />+91 9425152102</a>
              <a href="tel:+91 9893519860 "><PhoneCall />+91 9893519860</a>
              <a href="tel:+91 9425385997"><PhoneCall />+91 9425385997</a>
              <a href="satpuraref1@gmail.com"><Mail />satpuraref1@gmail.com</a>
              <p className="address">
                <MapPin />  Deotal Opposite Ramyan Mandir, Nagpur Road, Jabalpur-482002, Madhya Pradesh, India
              </p>
            </div>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    </div>
  );
};
