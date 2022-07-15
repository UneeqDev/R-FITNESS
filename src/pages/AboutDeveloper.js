import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/me.jpg";
import { theme } from "../theme/theme.js";
import { GitHub, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { MotionInView, varFadeInUp, varZoomIn, varRotateIn } from "../animate";

const container = {
  width: "100vw",
  display: "flex",
  alignItems: "center",
  jusitfyContent: "center",

  flexDirection: { md: "row", sm: "column", xs: "column" },
};
const top = {
  flex: "1",
  backgroundColor: "white",
  padding: "2rem 3.5rem",
  flexDirection: "column",
  alignItems: "center",
};
const bottom = {
  flex: "1",
  backgroundColor: "aliceblue",
  alignItems: "flex-start",
  height: "100%",
  padding: "0 3rem",
};
const ImgStyle = styled("img")({
  width: "300px",
  height: "350px",
  borderRadius: "5rem 5rem 0 0",
  objectFit: "contain",
  backgroundColor: "#b70101",
});
const iconStyle = {
  width: "35px",
  height: "35px",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: "none",
  color: "white",
  marginTop: "1.2rem",
};
function AboutDeveloper() {
  return (
    <>
      <Box sx={container}>
        <Stack sx={top} spacing={1}>
          <MotionInView variants={varZoomIn}>
            <ImgStyle src={Image} alt="me" />
          </MotionInView>
          <Typography
            variant="p"
            fontWeight="bold"
            fontSize="30px"
            color={theme.palette.primary.main}
            marginBottom="-1rem"
          >
            Nimmo
          </Typography>
          <Typography
            variant="p"
            color={theme.palette.primary.main}
            fontSize="20px"
          >
            Frontend Developer
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              textTransform: "inherit",
              width: { md: "70%", xs: "90%" },
              marginBottom: "2rem",
            }}
            onClick={() => (window.location = "mailto:uniqueninma@gmail.com")}
          >
            Contact Me
          </Button>
          <Stack direction="row" spacing={2}>
            <MotionInView variants={varRotateIn}>
              <a
                href="https://github.com/UneeqDev"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Box sx={iconStyle}>
                  <GitHub sx={{ color: "#010411" }} />
                </Box>
              </a>
            </MotionInView>
            <MotionInView variants={varRotateIn}>
              <a
                href="https://twitter.com/UneeqDev"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <Box sx={iconStyle}>
                  <Twitter sx={{ color: "#010411" }} />
                </Box>
              </a>
            </MotionInView>
            <MotionInView variants={varRotateIn}>
              <a
                href="https://instagram.com/uneeqdev/"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
              >
                <Box sx={iconStyle}>
                  <Instagram sx={{ color: "#010411" }} />
                </Box>
              </a>
            </MotionInView>
            <MotionInView variants={varRotateIn}>
              <a
                href="https://linkedin.com/mwlite/In/uneeqdev"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box sx={iconStyle}>
                  <LinkedIn sx={{ color: "#010411" }} />
                </Box>
              </a>
            </MotionInView>
          </Stack>
        </Stack>
        <MotionInView variants={varFadeInUp}>
          <Stack sx={bottom} direction="column">
            <Typography
              variant="p"
              fontWeight="bold"
              color="primary"
              fontSize="20px"
              mb={2}
            >
              ABOUT ME
            </Typography>

            <Typography
              variant="p"
              sx={{ fontSize: { md: "17", sm: "17px", xs: "16px" } }}
            >
              I am an innovative <b>frontend developer</b> with 4 months
              experience building and maintaining responsive websites. I am
              proficient in developing websites using React/Next, Typescript and
              Firebase, troubleshooting simple/complex issues and implementing
              new features based on user feedback. <br />
              <br />
              <t />
              My expertise is in the area of responsive design. With every line
              of code, I strive to make the web a beautiful place!
            </Typography>
          </Stack>
        </MotionInView>
      </Box>
    </>
  );
}

export default AboutDeveloper;
