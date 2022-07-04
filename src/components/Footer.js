import { Alert, Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../theme/theme";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  MotionInView,
  varFadeInDown,
  varFadeInUp,
  varRotateIn,
} from "../animate";

const container = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const wrapper = {
  width: { xs: "90%", sm: "80%" },
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "2rem 0",
};
const InputContainer = {
  width: "100%",
  backgroundColor: "#fbf6fb",
  padding: "7px",
  borderRadius: "5px",
};
const StyledInput = styled("input")({
  width: "100%",
  outline: "none",
  border: "none",
  fontSize: "18px",
});
const SubSection = {
  width: "100%",
  marginTop: "1rem",
  display: "flex",
  flexDirection: { sm: "row", xs: "column" },
};

const AboutContainer = {
  padding: "1rem",

  flex: "1",
};
const HoursContainer = {
  padding: "1rem",

  flex: "1",
};
const textStyle = {
  fontSize: "13px",
  letterSpacing: "0.7px",
};
const iconStyle = {
  width: "35px",
  height: "35px",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  border: "1px solid red",
  color: "white",
};
function Footer() {
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);
  const [error, setError] = useState(null);
  const emailRegex = /\S+@\S+\.\S+/;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!email) {
      setError("email is required");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email!");
    } else {
      setClick(true);
      setError(null);
      setEmail("");
    }
  };
  return (
    <>
      <Box sx={container} backgroundColor={theme.palette.primary.main}>
        <Box sx={wrapper}>
          <MotionInView variants={varFadeInUp}>
            <Typography gutterBottom color="secondary">
              FOR LATEST NEWS & UPDATES
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <Typography mb={3} color="white" fontWeight="bold">
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
          </MotionInView>

          {click && (
            <MotionInView variants={varFadeInDown}>
              <Alert
                severity="success"
                onClose={() => setClick(false)}
                sx={{ marginBottom: "1rem" }}
              >
                <Typography>
                  Thanks for susbscribing to our Newsletter
                </Typography>
              </Alert>
            </MotionInView>
          )}

          <Box sx={InputContainer}>
            <StyledInput
              placeholder="Email"
              onChange={handleChange}
              value={email}
            />
          </Box>
          <Button
            sx={{ marginTop: "0.5rem" }}
            borderRadius="5px"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            SUBSCRIBE
          </Button>
          {error && (
            <Typography mt={2} sx={{ color: "red" }}>
              {error}
            </Typography>
          )}

          <Box sx={SubSection}>
            <Box sx={HoursContainer}>
              <Stack direction="column">
                <Typography sx={{ fontWeight: "bold", color: "white" }}>
                  WORKING HOURS
                </Typography>
                <Box
                  sx={{
                    width: "6rem",
                    height: "3px",
                    backgroundColor: "red",
                    marginBottom: "2rem",
                  }}
                ></Box>
                <MotionInView variants={varFadeInUp}>
                  <Stack direction="row" spacing="2">
                    <Stack
                      direction="column"
                      flex="1"
                      color="white"
                      spacing="0.3"
                    >
                      <Typography sx={textStyle}>MONDAY-FRIDAY</Typography>
                      <Typography sx={textStyle}>SATURDAY</Typography>
                      <Typography sx={textStyle}>PUBLIC HOLIDAYS</Typography>
                      <Typography sx={textStyle}>CLEANING</Typography>
                      <Typography sx={textStyle}>CLOSED</Typography>
                    </Stack>
                    <Stack
                      direction="column"
                      flex="1"
                      fontSize="14px"
                      color="white"
                    >
                      <Typography sx={textStyle}>6AM-10PM</Typography>
                      <Typography sx={textStyle}>7AM-10PM</Typography>
                      <Typography sx={textStyle}>7AM-8:30PM</Typography>
                      <Typography sx={textStyle}>2PM-4PM</Typography>
                      <Typography sx={textStyle}>JAN, DEC 25 & 26</Typography>
                    </Stack>
                  </Stack>
                </MotionInView>
              </Stack>
            </Box>
            <Box sx={AboutContainer}>
              <Stack direction="column">
                <Typography
                  variant="p"
                  letterSpacing={3}
                  color="secondary"
                  fontWeight="bold"
                  marginBottom={3}
                >
                  R-FITNESS
                </Typography>
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="p"
                    fontSize="15px"
                    color="white"
                    letterSpacing="0.4px"
                  >
                    We are a <b>360</b> health and wellness Company, Our
                    top-of-the-line facilities and proffesionally certified
                    personal trainers provide our members with a holistic
                    experience.
                  </Typography>
                </MotionInView>

                <Stack direction="row" spacing={2} mt={3}>
                  <MotionInView variants={varRotateIn}>
                    <a
                      href="https://facebook.com/Unique"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Box sx={iconStyle}>
                        <Facebook sx={{ color: "white" }} />
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
                        <Twitter sx={{ color: "white" }} />
                      </Box>
                    </a>
                  </MotionInView>
                  <MotionInView variants={varRotateIn}>
                    <a
                      href="https://Instagram.com/uneeqdev"
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Box sx={iconStyle}>
                        <Instagram sx={{ color: "white" }} />
                      </Box>
                    </a>
                  </MotionInView>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
