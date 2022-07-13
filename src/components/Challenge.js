import { Box, styled, Grid, Typography, Stack, Button } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  varFadeInUp,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  MotionInView,
  varSlideInUp,
} from "../animate";
import Image from "../assets/Guy2.jpg";
const boxStyle = {
  width: "100%",
};
const ImgStyle = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "red",
  borderRadius: "5%",
});
function Challenge() {
  return (
    <>
      <Box sx={boxStyle}>
        <Box m={6}>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <Stack
                direction="column"
                spacing={3}
                sx={{ paddingRight: { sm: "1rem", xs: "0" } }}
              >
                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h5" fontWeight="bold">
                    STEP UP YOUR <br />
                    <Typography variant="span" color="secondary">
                      FITNESS CHALLENGE
                      <br />
                    </Typography>
                    WITH US
                  </Typography>
                </MotionInView>
                <MotionInView variants={varFadeInUp}>
                  <Typography variant="p" sx={{ fontSize: { sm: "18.3px" } }}>
                    Gyming is not just a body-changing experience. The whole
                    process can bring about significant changes in your
                    lifestyle <br />
                    <br />
                    Most people have a certain image in mind before joining a
                    gym. It might be that of toned up muscles or that of a flat
                    belly. But the gym is not just about that. You get a renewed
                    sense of energy as your dopamine, endorphine and testerones
                    levels rise. you get a flexibility in your body and a glow
                    to your skin.
                  </Typography>
                </MotionInView>
              </Stack>
              <MotionInView variants={varFadeInUp}>
                <ScrollLink
                  style={{ color: "white", textDecoration: "none" }}
                  to="search"
                  spy={true}
                  duration={1000}
                  smooth={true}
                >
                  <Button variant="contained" sx={{ marginTop: "1.8rem" }}>
                    start training
                  </Button>
                </ScrollLink>
              </MotionInView>
            </Grid>
            <Grid item md={6} xs={12}>
              <MotionInView variants={varFadeInRight}>
                <ImgStyle src={Image} alt="img" />
              </MotionInView>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Challenge;
