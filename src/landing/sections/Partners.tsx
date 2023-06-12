import { Box, styled } from "@mui/material";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  PhotoFirstPartner,
  PhotoFourthPartner,
  PhotoSecondPartner,
  PhotoThirdPartner
} from "../../assets/index";
import { SectionHeading } from "../components/SectionHeading";
import { SpacedSection } from "../components/SpacedSection";

const data = [
  {
    id: 1,
    image: PhotoFirstPartner
  },
  {
    id: 2,
    image: PhotoSecondPartner
  },
  {
    id: 3,
    image: PhotoThirdPartner
  },
  {
    id: 4,
    image: PhotoFourthPartner
  },
  {
    id: 5,
    image: PhotoFirstPartner
  },
  {
    id: 6,
    image: PhotoSecondPartner
  },
  {
    id: 7,
    image: PhotoThirdPartner
  },
  {
    id: 8,
    image: PhotoFourthPartner
  }
];

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
    <StyledSection id="partners">
      <StyledBox>
        <StyledTitle>Partners</StyledTitle>
        <StyledSlider {...settings}>
          {data.map((item) => (
            <Box className="partner" key={item.id}>
              <img className="image" src={item.image} alt="image partner" />
            </Box>
          ))}
        </StyledSlider>
      </StyledBox>
    </StyledSection>
  );
};

const StyledSection = styled(SpacedSection)(() => ({
  marginBottom: "0",
  paddingBottom: "120px"
}));

const StyledBox = styled(Box)(() => ({
  "& .partner": {
    margin: "0px 15px",

    "& .image": {
      height: "126px",
      width: "255px"
    }
  }
}));

const StyledTitle = styled(SectionHeading)(() => ({
  textAlign: "center",
  margin: "0 0 40px"
}));

const StyledSlider = styled(Slider)(() => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  marginBottom: "10px",
  "& div:focus": {
    outline: "none"
  }
}));
