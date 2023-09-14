import React, {useEffect, useState} from "react";

//swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

// img
import img_0 from "../assets/crew/image-douglas-hurley.png";
import img_1 from "../assets/crew/image-mark-shuttleworth.png";
import img_2 from "../assets/crew/image-victor-glover.png";
import img_3 from "../assets/crew/image-anousheh-ansari.png";
// ICON
import loadingIcon from "../assets/shared/loading.png";

//style
import '../styles/crew.scss';

const CrewComponent = ({data}) => {
  const [crew, setCrew] = useState(null);

  useEffect(() => {
    setCrew(data.crew)
  }, [data])


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
  };
  return (
    <div className="crew wrapper">
      {crew ? (
        <Swiper
          pagination={{clickable: true}}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={500}
          autoplay={{delay: 5000, disableOnInteraction: false}}
        >
          {crew.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="content crew">
                <div className="title-img">
                  <h1>
                    <span>0 2 </span> M E E T &nbsp;&nbsp;&nbsp;Y O U R
                    &nbsp;&nbsp;&nbsp;C R E W
                  </h1>
                  <div className="img-mobile">
                    <img src={imgIndex(index)} alt=""/>
                  </div>
                  <div className="header-slider">
                    <h2>{item.role.toUpperCase()}</h2>
                  </div>
                  <div className="slider">
                    <div className="content-slider">
                      <h1>{item.name.toUpperCase()}</h1>
                      <p>{item.bio}</p>
                      <div className="mobile-slider-header">
                        <h2>{item.role.toUpperCase()}</h2>
                        <h3>{item.name.toUpperCase()}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper-slider">
                  <img src={imgIndex(index)} alt={item.name}/>
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
  );
};

export default CrewComponent;
