import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"



function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
    
  };

  return (
        <div className="Section">
          <Slider {...settings}>
            <div className="imagesSection">
              <img
                className="slidesComp"
                src="../../public/pexels-igor-ovsyannykov-56123-205961.jpg"
              />
            </div>
    
            <div className="imagesSection">
              <img
                className="slidesComp"
                src="../../public/shop2.jpg"
              />
            </div>
    
            <div className="imagesSection">
              <img
                className="slidesComp"
                src="../../public/shop3.jpg"
              />
            </div>
    
            <div className="imagesSection">
              <img
                className="slidesComp"
                src="../../public/shop4.jpg"
              />
            </div>
          </Slider>
        </div>
    
  );
}

export default Carousal;