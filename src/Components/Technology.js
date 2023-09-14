import React, { useEffect, useState } from "react";

//icon
import loadingIcon from "../assets/shared/loading.png";

//img
import img_0 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img_1 from "../assets/technology/image-spaceport-portrait.jpg";
import img_2 from "../assets/technology/image-space-capsule-portrait.jpg";

//style
import "../styles/technology.scss";

const TechComponent = ({ data }) => {
  const [technology, setTechnology] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTechnology(data.technology);
  }, [data]);

  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      default:
        return false;
    }
  };

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {technology.length ? (
        <div className="technology-wrapper wrapper">
          <div className="technology-header">
            <h1>
              <span>0 3 </span> S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
              &nbsp;&nbsp;&nbsp;1 0 1
            </h1>
          </div>
          <div className="technology-body">
            <div className="tech-img">
              <img
                src={imgIndex(currentIndex)}
                alt={technology[currentIndex].name}
                className="desktop"
              />
            </div>
            <div className="control-slider">
              {technology.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  style={
                    index === currentIndex
                      ? { backgroundColor: "#ffffff", color: "#000000" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="tech-info">
              <span>T H E&nbsp;&nbsp;&nbsp;T E R M I N O L O G Y . . .</span>
              <h1>{technology[currentIndex].name.toUpperCase()}</h1>
              <p>{technology[currentIndex].description}</p>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading">
          <img src={loadingIcon} alt="" />
        </span>
      )}
    </>
  );
};

export default TechComponent;
