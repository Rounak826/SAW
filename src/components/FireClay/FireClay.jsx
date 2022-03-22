import React from 'react'
import {fireClay} from '../../Data';
import ProductVariants from '../ProductVariants/ProductVariants'
export default function FireClay() {
  return (
    <div className='FireClay'>
        <div className="BannerPart">
    <div className="row-Align">
      <div className="col-Align">
        <div className="banner-text">
          <div className="Banner-Text-Inner">
            <h1>
              Fire <span className="Mods">Clay</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductVariants data={fireClay}/>
  <div className="Acid-Proof-Brick-Introduction">
    <div className="Introduction-of-Brick">
      <h1>High Alumina Brick</h1>
      <p>
      Refractory Fire clays & castables can be used to create the monolithic linings within all types of furnaces and kilns. They can be further classified into the following sub-categories: conventional, low iron, low cement, and insulating for installation either by gunning or manually.
      </p>
    </div>
    <div className="KeyFeaturesCard">
      <h4>Our Products</h4>
      <p>Burnt Fire Clay</p>
      <p>Unburnt Fire Clay</p>
      <p>And Other Castables</p>
    </div>
  </div>
  <div className="WaterResistant">
    <h1>Water Absorption</h1>
    <div className="WaterResistent-Row">
      <div className="WaterResistant-Row-Card">
        <h2>Class I</h2>
        <p>Water Absorption &#60; 1%</p>
        <p>Cold Crushing Strength (C.C.S) &#62; 750 kg/cm sq</p>
        <p>Modulus Of Rupture &#62; 175 kg/cm sq</p>
        <p>Acid Resistant &#60; 1 %</p>
      </div>
      <div className="WaterResistant-Row-Card">
        <h2>Class II</h2>
        <p>Water Absorption &#60; 1%</p>
        <p>Cold Crushing Strength (C.C.S) &#62; 750 kg/cm sq</p>
        <p>Modulus Of Rupture &#62; 175 kg/cm sq</p>
        <p>Acid Resistant &#60; 1 %</p>
      </div>
    </div>
  </div>
  <div className="Application">
    <h1>Application Areas</h1>
    <div className="Application-Parent">
      <div className="Area-Card">
        
        <h3>Chimney of Thermal Power Plants</h3>
      </div>
      <div className="Area-Card">
        
        <h3>Acid Storage Tank & Floor etc</h3>
      </div>
    </div>
  </div></div>
  )
}
