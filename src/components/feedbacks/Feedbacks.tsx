import { useState } from "react";
import type { CSSProperties, MouseEventHandler } from "react";

import { Box, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowFeedback } from "../../assets";
import { CFeedbacksData } from "../../utils/constants";

interface IArrowsProps {
  onClick?: () => MouseEventHandler<HTMLOrSVGElement>;
  style?: CSSProperties;
  className?: string;
}

const NextArrow = ({ onClick, style, className }: IArrowsProps): JSX.Element => (
  <ArrowFeedback
    onClick={onClick}
    className={className}
    style={{
      ...style
    }}
  />
);

const PrevArrow = ({ onClick, style, className }: IArrowsProps): JSX.Element => (
  <ArrowFeedback
    onClick={onClick}
    className={className}
    style={{
      ...style
    }}
  />
);

export const Feedbacks = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinity: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <StyledSlider>
      <Slider {...settings} variableWidth={true}>
        {CFeedbacksData.map((feedback, index) => (
          <Box key={index} className={index === slideIndex ? "slide slide-active" : "slide"}>
            {/* {feedback.id} */}
          </Box>
        ))}
      </Slider>
    </StyledSlider>
  );
};

const StyledSlider = styled(Box)(() => ({
  width: "98vw",
  display: "flex",
  justifyContent: "center",

  "& .slick-slider": {
    height: "80vh"
  },

  "& .slick-list": {
    width: "70vw",
    height: "80vh",
    display: "flex",
    alignItems: "center",

    "& .slick-track": {
      display: "flex"
    }
  },

  "& .slick-center .slide-active": {
    height: "65vh",
    background: "#666CA7",
    borderRadius: "40px",
    transform: "scaleY(1.1)"
  },

  "& .slick-slide": {
    width: "20vw",
    height: "65vh",
    background: "#E5E5E5",
    borderRadius: "40px"
  },

  "& .slick-next": {
    right: "0",
    transform: "rotate(180deg)"
  },

  "& .slick-prev": {
    left: "0",
    transform: "rotate(360deg)",
    zIndex: "1"
  },

  "& .slick-arrow": {
    width: "60px",
    height: "60px",

    "&:hover": {
      fill: "#3A10E5",

      "& path": {
        fill: "white"
      }
    }
  }
}));
