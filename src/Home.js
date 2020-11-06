import React from 'react';

import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
          <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg" alt="" />

        <div className="home__row">

          <Product id="24484552" title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>

          <Product id="16168465" title="Kenwood iMix Stand Mixser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Qisk, 5 Litre Glass Box" price={729.99} image="https://b3h2.scene7.com/is/image/BedBathandBeyond/289544468152079p?$690$&wid=690&hei=690" rating={4}/>
        </div>

        <div className="home__row">

        <Product id="25445556" title="Samsung LC49RG987SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images.samsung.com/is/image/samsung/ca_LC32F391FWNXZA_001_Front_white?$L1-Thumbnail$" rating={3}/>

        <Product id="1546685" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcool Fabric" price={89.99} image="https://cdn.shopify.com/s/files/1/2660/5106/products/28618010_HC_02_1400x.jpg?v=1571710850" rating={5}/>

        <Product id="1554655541" title="New Apple iPad Pro (12.9-inch, Wi-Fi 120GB) - Silver (4th generation)" price={529.99} image="https://www.bhphotovideo.com/images/images2500x2500/apple_mxaw2ll_a_12_9_ipad_pro_early_1553831.jpg" rating={4}/>
        </div>

        <div className="home__row">
          
        <Product id="351578651" title="Samsung LSDC8457ADFJK 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1029.99} image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg" rating={4}/>

        </div>
      </div>
      
    </div>
  )
}

export default Home;
