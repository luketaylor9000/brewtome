import React, { useState, useEffect } from 'react'

import brewery_banner_1 from '../../../../assets/images/brewery_banners/brewery_banner_1.jpg';
import brewery_banner_2 from '../../../../assets/images/brewery_banners/brewery_banner_2.jpeg';
import brewery_banner_3 from '../../../../assets/images/brewery_banners/brewery_banner_3.jpeg';
import brewery_banner_4 from '../../../../assets/images/brewery_banners/brewery_banner_4.jpeg';

const BreweryBannerRandomizer = () => {
  const [randomImage, setRandomImage] = useState([]);

  const images= [
    brewery_banner_1,
    brewery_banner_2,
    brewery_banner_3,
    brewery_banner_4
  ]

    const changeImage = () => {
      const randomNumber = Math.floor(Math.random() * images.length);
      setRandomImage(randomNumber)
    }

    useEffect(() => {
      changeImage();
    },[]);

    // console.log(randomImage)
    // debugger
    //why is the changeImage function running 3 times?

  return (
    <div>
      <img src={images[randomImage]} alt="brewery banner"/>
    </div>
  )
}

export default BreweryBannerRandomizer