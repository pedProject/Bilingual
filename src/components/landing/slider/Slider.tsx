import { styled } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// eslint-disable-next-line import/no-unresolved
import "@splidejs/react-splide/css";

import sliderImage from "./../../../assets/images/slider.png";

export const Slider = () => {
  return (
    <div>
      <CustomSplideSlide
        aria-label="My Favorite Images"
        options={{
          rewind: true
        }}
      >
        <SplideSlide>
          <CustomImg src={sliderImage} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <CustomImg src={sliderImage} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <CustomImg src={sliderImage} alt="Image 3" />
        </SplideSlide>

        {/* <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div> */}
      </CustomSplideSlide>
    </div>
  );
};

const CustomImg = styled("img")(() => ({
  width: "1028px",
  height: "440px"
}));

const CustomSplideSlide = styled(Splide)(() => ({
  "& .splide__arrow": {
    top: "100%",
    width: "60px",
    height: "60px",
    marginLeft: "100px"
    // background: "#3A10E5"
    // transform: matrix(-1, 0, 0, 1, 0, 0)
  },
  "& .splide__arrow--next": {
    marginRight: "200px"
  },
  "& .splide-list": {
    display: "flex",
    justifyContent: "center"
  }
}));
