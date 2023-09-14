import React, {useEffect, useRef, useState} from "react";

import img_0 from "../assets/destination/image-moon.png";
import img_1 from "../assets/destination/image-mars.png";
import img_2 from "../assets/destination/image-europa.png";
import img_3 from "../assets/destination/image-titan.png";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

import loadingIcon from "../assets/shared/loading.png";

import '../styles/destination.scss';

const DestinationComponent = ({data}) => {
  const [destinations, setDestinations] = useState([]);
  const swiperRef = useRef(null);


  useEffect(() => {
    setDestinations(data.destinations)
  }, [data])

  const handleNavClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  }


  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      case 3:
        return img_3;
      default:
        return false;
    }
  }


  return (
    <div className="destination wrapper">
      {destinations ? (
        <Swiper ref={swiperRef}
                modules={[Pagination]}
                navigation>
          {destinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="content destin">
                <div className="title-img">
                  <h1>
                    <span>0 1 </span> P I C K&nbsp;&nbsp;&nbsp;Y O U
                    R&nbsp;&nbsp;&nbsp;D E S T I N A T I O N
                  </h1>
                  <img src={imgIndex(index)} alt={item.name}/>
                </div>
                <div className="wrapper-slider">
                  <div className="header-slider swiper-pagination">
                    <ul>
                      {destinations.map((item, index) => (
                        <li  key={index} onClick={() => handleNavClick(index)}>
                          {item.name.toUpperCase()}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="slider">
                    <div className="content-slider">
                      <h1>{item.name.toUpperCase()}</h1>
                      <p>{item.description}</p>
                      <hr/>
                      <div className="info-slider">
                        <div className="info-box">
                          <h2>AVG. DISTANCE</h2>
                          <span>{item.distance.toUpperCase()}</span>
                        </div>
                        <div className="info-box">
                          <h2>EST. TRAVEL TIME</h2>
                          <span>{item.travel.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <span className="loading">
          <img src={loadingIcon} alt=""/>
        </span>
      )}
    </div>
  )
}

export default DestinationComponent;
