import React from 'react'
import InsulationCard from '../icons/InsulationCard.jpeg'
import {InsulationBrick} from '../../Data';
import ProductVariants from '../ProductVariants/ProductVariants'
export default function FireInsulatio() {
  return (
    <div className='FireInsulation'>
        <div className="BannerPart">
    <div className="row-Align">
      <div className="col-Align">
        <div className="banner-text">
          <div className="Banner-Text-Inner">
            <h1>
              Insulation <span className="Mods">Brick</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductVariants data={InsulationBrick}/>
  <div className="Acid-Proof-Brick-Introduction">
    <div className="Introduction-of-Brick">
      <h1>Insulation Brick</h1>
      <p>
      To arrest the thermal radiation loss and to check the heat losses of furnace for longer life of linings, different qualities of Insulating Refractories (Both cold & hot face) are supplied according to the application areas. Insulation Bricks find application in Iron & Steel, Cement, Chemical, Copper, Glass plant &other miscellaneous Industries. These bricks have densities and conductivities ranging from low to moderate, low thermal expansion and very high resistance to thermal spalling.
      </p>
    </div>
    <div className="KeyFeaturesCard">
      <img src={InsulationCard} alt="" />
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
