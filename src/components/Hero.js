import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";
import Image1 from "../assets/Image2.png";
import { varFadeInUp, MotionInView } from "../animate";
import { Link as ScrollLink } from "react-scroll";

const container = {
  width: "100vw",
  height: { md: "80vh", xs: "auto" },
  backgroundColor: "#010514",
  color: "white",
};
const ImgStyle = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
function Hero() {
  return (
    <>
      <Box sx={container}>
        <Grid
          container
          spacing={2}
          mr={3}
          sx={{ height: "100%", marginLeft: { md: "6rem", sx: "0" } }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <MotionInView variants={varFadeInUp}>
              <Stack
                direction="column"
                spacing={3}
                sx={{
                  alignItems: { md: "flex-start", xs: "center" },
                  textAlign: { md: "start", xs: "center" },
                  justifyContent: "center",
                  marginTop: "5rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { md: "3.4rem", sm: "2.8rem", xs: "2.5rem" },
                  }}
                >
                  The ultimate <br /> online personal <br /> training plans
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
                >
                  Reach your body goals, boost your energy <br />
                  for life anytime, anywhere!
                </Typography>

                <Stack
                  direction="column"
                  spacing={0}
                  component="button"
                  sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                  }}
                >
                  <ScrollLink
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    to="search"
                    spy={true}
                    duration={2000}
                    smooth={true}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="p" fontSize="17px">
                        start your training
                      </Typography>
                      <ArrowRightAlt />
                    </Stack>
                  </ScrollLink>
                  <Box
                    sx={{ width: "100%", height: "2px" }}
                    backgroundColor={theme.palette.secondary.main}
                  ></Box>
                </Stack>
              </Stack>
            </MotionInView>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{ height: "100%", width: "100%" }}
          >
            {/* <MotionInView variants={varFadeInRight}> */}
            <Stack
              sx={{
                width: { md: "75%", sm: "70%", xs: "100%" },
                height: "100%",
                alignItems: { md: "flex_start" },
              }}
            >
              <ImgStyle src={Image1} alt="bgImage" />
            </Stack>
            {/* </MotionInView> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Hero;
