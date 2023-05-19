import { styled } from "@mui/material";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowIcon, PhotoSlider } from "../../../assets/index";

import "swiper/swiper-bundle.min.css";

export const sliderImages = [
  {
    img: PhotoSlider
  },
  {
    img: PhotoSlider
  },
  {
    img: PhotoSlider
  }
];
export const Slider = () => {
  return (
    <>
      <CustomSwiper
        cssMode={true}
        navigation={{
          nextEl: ".next-element",
          prevEl: ".prev-element"
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={true}
        speed={2000}
      >
        <div className="prev-element swiper-button-prev">
          <ArrowIcon />
        </div>
        <div className="next-element swiper-button-next ">
          <ArrowIcon />
        </div>

        {sliderImages.map((el) => {
          return (
            <>
              <SwiperSlide>
                <Img src={el.img} />
              </SwiperSlide>
            </>
          );
        })}
      </CustomSwiper>
    </>
  );
};

const CustomSwiper = styled(Swiper)(() => ({
  "& .swiper-wrapper": {
    height: "670px"
  },
  "& .swiper-slide": {
    display: "flex",
    justifyContent: "center"
  },

  "& .next-element": {
    transform: "rotate(180deg)"
  },

  "& .swiper-button-prev,.swiper-button-next": {
    width: "60px",
    height: "60px",
    border: "1px solid #3A10E5",
    borderRadius: "50%",
    marginTop: "100px",
    position: "none",
    fontFamily: "none",
    marginLeft: "630px",
    marginRight: "635px"
  },
  "& .swiper-button-next:after": {
    fontFamily: "none",
    content: "' '"
  },
  "& .swiper-button-prev:after": {
    fontFamily: "none",
    content: "' '"
  },

  "& .prev-element:hover": {
    background: "#3A10E5",
    "& svg > path :hover": {
      fill: "#fff"
    }
  },
  "& .prev-element svg:hover ": {
    "& path": {
      fill: "#fff"
    }
  },

  "& .next-element  svg:hover": {
    fill: "#3A10E5",
    "& path": {
      fill: "#fff"
    }
  },
  "& .swiper-horizontal> .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal":
    {
      bottom: "180px",
      "& .swiper-pagination-bullet": {
        width: "6px",
        height: "16px",
        background: "rgba(41, 8, 173, 0.2)",
        borderRadius: "20px"
      },
      "& .swiper-pagination-bullet-active": {
        background: "#3A10E5",
        height: "30px"
      }
    }
}));

const Img = styled("img")(() => ({
  width: "1028px",
  height: "440px"
}));
