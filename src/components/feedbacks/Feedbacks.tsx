import Slider from "react-slick";

import { CFeedbacksData } from "../../utils/constants";

export const Feedbacks = (): JSX.Element => {
  const settings = {};
  return (
    <Slider {...settings}>
      {CFeedbacksData.map((item) => (
        <div
          style={{
            height: "564px",
            width: "366px",
            borderRadius: "40px",
            background: "#E5E5E5"
          }}
          key={item.id}
        >
          {item.id}
        </div>
      ))}
    </Slider>
  );
};

// import { Box, Rating, styled } from "@mui/material";
// import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper-bundle.min.css";
// import { ArrowFeedbacksIcon } from "../../assets";
// import { CFeedbacksData } from "../../utils/constants";

// export const Feedbacks = (): JSX.Element => {
//   return (
//     <>
//       <StyledTitle>Why people love Bilingual</StyledTitle>

//       <StyledSwiper
//         modules={[Navigation, Pagination, Autoplay, A11y]}
//         slidesPerView={3}
//         speed={2000}
//         navigation={{
//           nextEl: ".my-next-button",
//           prevEl: ".my-prev-button"
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//       >
//         <div className="my-prev-button swiper-button-prev">
//           <ArrowFeedbacksIcon />
//         </div>
//         <div className="my-next-button swiper-button-next">
//           <ArrowFeedbacksIcon />
//         </div>

//         {CFeedbacksData.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <Box className="slide">
//               <img className="avatar" src={slide.image} alt={slide.userName} />

//               <p className="text">{slide.text}</p>

//               <p className="name">- {slide.userName}</p>

//               <Rating readOnly value={slide.rating} />
//             </Box>
//           </SwiperSlide>
//         ))}
//       </StyledSwiper>
//     </>
//   );
// };

// const StyledTitle = styled("p")(() => ({
//   fontFamily: "Gilroy",
//   fontWeight: "700",
//   fontSize: "40px",
//   lineHeight: "48px",
//   color: "#3752B4",
//   textAlign: "center",
//   margin: "0 0 60px"
// }));

// const StyledSwiper = styled(Swiper)(() => ({
//   "&.swiper": {
//     height: "700px",
//     background: "#fef5e8"
//   },

//   "& .swiper-slide-next": {
//     "& .slide": {
//       background: "#666CA7",

//       "& .avatar": {
//         marginTop: "40px",
//         width: "73%",
//         height: "40vh"
//       },

//       "& .text": {
//         marginTop: "52px",
//         color: "white"
//       },

//       "& .name": {
//         color: "white"
//       }
//     }
//   },

//   "& .slide": {
//     height: "564px",
//     width: "25vw",
//     background: "#E5E5E5",
//     borderRadius: "40px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",

//     "& .avatar": {
//       marginTop: "70px",
//       width: "62%",
//       height: "35vh"
//     },

//     "& .text": {
//       marginTop: "38px",
//       padding: "0 30px"
//     },

//     "& .name": {
//       color: "#3A10E5",
//       fontWeight: "600"
//     },

//     "& .MuiRating-root": {
//       fontSize: "1.2rem",
//       "& path": {
//         fill: "#F99808"
//       }
//     }
//   },

//   "& .my-next-button": {
//     width: "60px",
//     height: "60px",
//     transform: "rotate(180deg)",
//     top: "270px",

//     "svg:hover": {
//       fill: "#3A10E5",

//       "& path": {
//         fill: "white"
//       }
//     }
//   },

//   "& .my-prev-button": {
//     width: "60px",
//     height: "60px",
//     top: "270px",

//     "svg:hover": {
//       fill: "#3A10E5",

//       "& path": {
//         fill: "white"
//       }
//     }
//   },

//   "& .swiper-button-next:after": {
//     content: "''"
//   },
//   "& .swiper-button-prev:after": {
//     content: "''"
//   },

//   "& .swiper-pagination": {
//     height: "300px",
//     bottom: "-200px",

//     "& .swiper-pagination-bullet": {
//       height: "16px",
//       width: "6px",
//       background: "rgba(59, 16, 229, 0.354)",
//       borderRadius: "20px",
//       transform: "matrix(1, 0, 0, -1, 0, 0)"
//     },

//     "& .swiper-pagination-bullet-active": {
//       height: "30px",
//       background: "#3A10E5"
//     }
//   }
// }));
