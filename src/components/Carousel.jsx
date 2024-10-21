import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    draggable: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <CarouselWrapper className="slider-container">
      <Slider {...settings}>
        {data.map((res, index) => (
          <Link to={`/recipe/${res.RCP_SEQ}`}>
            <Slide key={index} bgImage={res.ATT_FILE_NO_MAIN}>
              <h3>{index + 1 + "위"}</h3>
              <p>{res.RCP_NM}</p>
            </Slide>
          </Link>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Slide = styled.div`
  background: url(${(props) => props.bgImage}) no-repeat center center;
  color: #fff;
  border-radius: 10px;
  width: 360px !important;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-size: cover;
  h3 {
    position: absolute;
  }
  p {
    font-size: 1.2rem;
    color: #0d92f4;
    font-weight: bold;
  }
`;
