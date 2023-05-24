import { Box, Rating, styled } from "@mui/material";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import {
  ArrowFeedbacksIcon,
  PhotoAibekFeedback,
  PhotoAlinaFeedback,
  PhotoMinuraFeedback
} from "../../../assets";

const data = [
  {
    id: 1,
    image: PhotoAibekFeedback,
    text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
    userName: "Aibek Atabekov",
    rating: 5
  },

  {
    id: 2,
    image: PhotoAlinaFeedback,
    text: "Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.",
    userName: "Alina Begishova",
    rating: 4
  },

  {
    id: 3,
    image: PhotoMinuraFeedback,
    text: "I have tried other language apps and found them boring but with Bilingual, it is easy and fun to practice every day.",
    userName: "Minura Telegenova",
    rating: 3
  },

  {
    id: 4,
    image: PhotoAibekFeedback,
    text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
    userName: "Alisher Jumanov",
    rating: 2
  },

  {
    id: 5,
    image: PhotoAlinaFeedback,
    text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
    userName: "Elizar Aitbekov",
    rating: 1
  },

  {
    id: 6,
    image: PhotoMinuraFeedback,
    text: "Great way to learn a language. Fun, interactive, and engaging. I am enjoying the course immensely and would recommend it to anyone who wishes to learn a second language.",
    userName: "Bekbolsun Azamatov",
    rating: 0
  }
];

export const Feedbacks = (): JSX.Element => {
  return (
    <StyledBox>
      <StyledTitle>Why people love Bilingual</StyledTitle>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={3}
        speed={2000}
        navigation={{
          nextEl: ".my-next-button",
          prevEl: ".my-prev-button"
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <div className="my-prev-button swiper-button-prev">
          <ArrowFeedbacksIcon />
        </div>
        <div className="my-next-button swiper-button-next">
          <ArrowFeedbacksIcon />
        </div>

        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box className="slide">
              <img className="avatar" src={slide.image} alt={slide.userName} />

              <p className="text">{slide.text}</p>

              <p className="name">- {slide.userName}</p>

              <Rating readOnly value={slide.rating} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  background: "#fef5e8",

  "& .swiper": {
    height: "720px",
    width: "80vw"
  },

  "& .swiper-wrapper": {
    left: "1.2%"
  },

  "& .swiper-slide": {
    transform: "translateY(5%)"
  },

  "& .swiper-slide-next": {
    "& .slide": {
      background: "#666CA7",
      transform: "scaleY(1.1)",

      "& .avatar": {
        marginTop: "40px",
        width: "20vw",
        height: "40vh"
      },

      "& .text": {
        marginTop: "52px",
        color: "white"
      },

      "& .name": {
        color: "white"
      }
    }
  },

  "& .slide": {
    height: "564px",
    width: "25vw",
    background: "#E5E5E5",
    borderRadius: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .avatar": {
      marginTop: "70px",
      width: "180px",
      height: "180px"
    },

    "& .text": {
      marginTop: "38px",
      padding: "0 30px"
    },

    "& .name": {
      color: "#3A10E5",
      marginTop: "40px",
      fontWeight: "600"
    },

    "& .MuiRating-root": {
      marginTop: "10px",
      fontSize: "1.2rem",
      "& path": {
        fill: "#F99808"
      }
    }
  },

  "& .my-next-button": {
    width: "60px",
    height: "60px",
    transform: "rotate(180deg)",
    top: "270px",
    right: "-0.02%",

    "svg:hover": {
      fill: "#3A10E5",

      "& path": {
        fill: "white"
      }
    }
  },

  "& .my-prev-button": {
    width: "60px",
    height: "60px",
    top: "270px",
    left: "-0.0%",

    "svg:hover": {
      fill: "#3A10E5",

      "& path": {
        fill: "white"
      }
    }
  },

  "& .swiper-button-next:after": {
    content: "''"
  },
  "& .swiper-button-prev:after": {
    content: "''"
  },

  "& .swiper-pagination": {
    height: "300px",
    top: "670px",

    "& .swiper-pagination-bullet": {
      height: "16px",
      width: "6px",
      background: "rgba(59, 16, 229, 0.354)",
      borderRadius: "20px",
      transform: "matrix(1, 0, 0, -1, 0, 0)"
    },

    "& .swiper-pagination-bullet-active": {
      height: "30px",
      background: "#3A10E5"
    }
  }
}));

const StyledTitle = styled("p")(() => ({
  fontFamily: "Gilroy",
  fontWeight: "700",
  fontSize: "2.5rem",
  lineHeight: "2.9rem",
  color: "#3752B4",
  textAlign: "center",
  margin: "0 0 60px"
}));
