import { styled } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CPartnersData } from "../../utils/constants";

export const Partners = (): JSX.Element => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4.65,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <StyledTitle>Partners</StyledTitle>

      <StyledSlider {...settings}>
        {CPartnersData.map((item) => (
          <div key={item.id} style={{ margin: "0px 15px" }}>
            <img src={item.image} alt="" style={{ height: "126px", width: "255px" }} />
          </div>
        ))}
      </StyledSlider>
    </>
  );
};

const StyledTitle = styled("p")(() => ({
  fontFamily: "Gilroy",
  fontWeight: "700",
  fontSize: "40px",
  lineHeight: "48px",
  color: "#3752B4",
  textAlign: "center",
  margin: "0 0 40px"
}));

const StyledSlider = styled(Slider)(() => ({
  width: "97.6vw",
  margin: "0 0 0 10px",

  "& div:focus": {
    outline: "none"
  }
}));
