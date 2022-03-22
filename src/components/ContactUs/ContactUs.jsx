import React, { useEffect } from "react";
import "./ContactUs.css";
import FeatherIcon from "feather-icons-react";
import { useLocation } from "react-router-dom";
export default function ContactUs() {
  const location = useLocation();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = `https://v1.nocodeapi.com/tejas001/google_sheets/xhkmsXbsrKKAgzxy?tabId=Sheet1`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['ContactUs']
    let data = new FormData(form)
    let row = [
      [data.get("Name"), data.get("Email"),data.get("Product"), data.get("Number"), data.get("Query")]
    ]

    console.log(row)
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(row)
    };


    //console.log(data.get("name"));
    fetch(scriptURL, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)})
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    console.log(location.state);
    if(location.state){
        
    }
  }, [location])
  
  return (
    <div className="ContactUs">
      <div className="ContactUs-Image">
        <div className="container">
          <div className="row">
            <div className="bread-inner">
              <div className="bread-crumb-inner">
                <h2>CONTACT US</h2>
                <p>
                  {" "}
                  <a href="">
                    {" "}
                    <span className="Mods">Home </span>{" "}
                  </a>
                  . Contact Us{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContactUs-Main">
        <div className="ContactUs-Cards">
          <div className="ContactUs-Card-01">
            <h4>
              {" "}
              <FeatherIcon icon="map-pin" /> Satpura Acid Ware
            </h4>
            <p>
              {" "}
              Deotal Opposite Ramyan Mandir, Nagpur Road, Jabalpur-482002,
              Madhya Pradesh, India
            </p>
          </div>
          <div className="ContactUs-Card-01">
            <h4>
              <FeatherIcon icon="phone" /> Phone No:
            </h4>
            <p>9425152102 , 9893519860 , 9425385997</p>
          </div>
          <div className="ContactUs-Card-01">
            <iframe
              title="My Map"
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d58691.43768793463!2d79.89150143773493!3d23.16235712977371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d23.16243!2d79.9266!5e0!3m2!1sen!2sin!4v1647258836741!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="ContactUs-Card-01">
            <h4>
              <FeatherIcon icon="mail" /> Email:
            </h4>
            <p>satpuraref1@gmail.com</p>
          </div>
        </div>
        <div className="ContactUs-Form">
          <div className="Form">
            <h1>Get in Touch </h1>
            <form name="ContactUs" onSubmit={HandleSubmit}>
              <input type="text" placeholder="Your Name..." name="Name" />
              <input type="text" placeholder="Your Email Id..." name="Email" />
              <input type="text" placeholder="Your Number..." name="Number" />
              <input type="text" value={location.state&&location.state.product} placeholder="Product name , Dimension" name="Product" />
              <textarea
                name="Query"
                id=""
                cols="100"
                rows="6"
                placeholder="Message / Details Of Product / Quantity"
              ></textarea>
              <button type="submit" className="ContactUs-Button">SUBMIT NOW</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
