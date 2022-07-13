import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "./Horizontal.css";

const boxStyle = {
  padding: "1rem 0  1rem 0.8rem",
  margin: "1rem",
  backgroundColor: "white",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "280px",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "10px 10px 10px 1px rgba(0,0,0,0.02)",
  "&:hover": {
    transform: "scale(1)",
  },
};
const box = {
  width: "80px",
  height: "80px",
  backgroundColor: "red",
  borderRadius: "20px",
};

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

const HorizontalScrollbar = ({ data }) => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation, EffectFade, Autoplay]}
      effect="fade"
      speed={800}
      slidesPerView={3}
      className="mySwiper"
    >
      <SwiperSlide className="swiperSlide">
        <Box sx={boxStyle}>
          <Stack direction="column">
            <Box sx={box}></Box>
            <Stack
              direction="column"
              mt={1}
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="p" fontWeight="bold" mt={1} fontSize="20px">
                CARDIO
              </Typography>
              <Typography
                variant="p"
                color="primary"
                textTransform="upppercase"
                textAlign="start"
              >
                Our Core Cardio Classes are essentially designated to help you
                reach your fitness goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fontSize="15px"
                sx={{ textTransform: "inherit" }}
              >
                View All
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Box sx={boxStyle}>
          <Stack direction="column">
            <Box sx={box}></Box>
            <Stack
              direction="column"
              mt={1}
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="p" fontWeight="bold" mt={1} fontSize="20px">
                CARDIO
              </Typography>
              <Typography
                variant="p"
                color="primary"
                textTransform="upppercase"
                textAlign="start"
              >
                Our Core Cardio Classes are essentially designated to help you
                reach your fitness goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fontSize="15px"
                sx={{ textTransform: "inherit" }}
              >
                View All
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Box sx={boxStyle}>
          <Stack direction="column">
            <Box sx={box}></Box>
            <Stack
              direction="column"
              mt={1}
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="p" fontWeight="bold" mt={1} fontSize="20px">
                Leg
              </Typography>
              <Typography
                variant="p"
                color="primary"
                textTransform="upppercase"
                textAlign="start"
              >
                Our Core Cardio Classes are essentially designated to help you
                reach your fitness goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fontSize="15px"
                sx={{ textTransform: "inherit" }}
              >
                View All
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <Box sx={boxStyle}>
          <Stack direction="column">
            <Box sx={box}></Box>
            <Stack
              direction="column"
              mt={1}
              alignItems="flex-start"
              spacing={2}
            >
              <Typography variant="p" fontWeight="bold" mt={1} fontSize="20px">
                CARDIO
              </Typography>
              <Typography
                variant="p"
                color="primary"
                textTransform="upppercase"
                textAlign="start"
              >
                Our Core Cardio Classes are essentially designated to help you
                reach your fitness goals.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                fontSize="15px"
                sx={{ textTransform: "inherit" }}
              >
                View All
              </Button>
            </Stack>
          </Stack>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default HorizontalScrollbar;
