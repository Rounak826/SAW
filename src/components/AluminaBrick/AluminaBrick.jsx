import React from 'react'
import './AluminaBrick.css'
import AluminaCard from '../icons/AluminaCard.png'
import ProductVariants from "../ProductVariants/ProductVariants";
import {HighAluminaBrick} from "../../Data";
export default function AluminaBrick() {
  return (
    <div className='AluminaBrick'>
        <div className="BannerPart">
        <div className="row-Align">
          <div className="col-Align">
            <div className="banner-text">
              <div className="Banner-Text-Inner">
                <h1>
                  High Alumina <span className="Mods">Brick</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductVariants data={HighAluminaBrick}/>
      <div className="Acid-Proof-Brick-Introduction">
        <div className="Introduction-of-Brick">
          <h1>High Alumina Brick</h1>
          <p>
          High-alumina refractories are made from bauxite, a naturally occurring material containing aluminum hydroxide (Al[OH]3) and kaolinitic clays. These raw materials are roasted to produce a mixture of synthetic alumina and mullite (an aluminosilicate mineral with the chemical formula 3Al2O3 · 2SiO2). 
          </p>
        </div>
        <div className="KeyFeaturesCard">
          <img src={AluminaCard} alt="" />
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
      </div>
    </div>
  )
}
