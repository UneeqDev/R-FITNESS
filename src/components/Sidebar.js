import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, FitnessCenter, Code } from "@mui/icons-material";
import { MotionInView, varFadeInRight } from "../animate";
import { useStateValue } from "../context/StateProvider";
const linkStyle = {
  padding: "10px 5px",

  marginBottom: "2px solid black",
  alignItems: "center",
  gap: "10px",

  justifyContent: "flex-start",
  "&: hover": {
    backgroundColor: "#18d0e4",
    transition: "0.4s ease-in-out",
    color: "white",
    cursor: "pointer",
  },
};

function Sidebar({ sideNav, setSideNav }) {
  const { setShowSearch } = useStateValue();
  const navigate = useNavigate();
  //not yet tested
  const handleHome = () => {
    setSideNav(false);
    console.log(sideNav);
    navigate("/");
  };
  const handleAbout = () => {
    setSideNav(false);
    navigate("/aboutdeveloper");
  };
  const handleWorkouts = () => {
    setSideNav(false);
    navigate("/exercises");
    setShowSearch(true);
  };
  return (
    <>
      <Box
        sx={{
          width: { md: "25vw", sm: "50vw", xs: "80vw" },
          height: "45vh",
          backgroundColor: "aliceblue",
          position: "absolute",
          right: { md: "1rem", sm: "12px", xs: "0" },
          top: sideNav ? "3rem" : "-100%",
          color: "#010411",
          display: sideNav ? "block" : "none",
          zIndex: "44444444444",
          transition: sideNav ? "0.3s ease-in-out" : "",
        }}
      >
        <Box sx={{ position: "relative" }}></Box>
        <MotionInView variants={varFadeInRight}>
          <Stack direction="column" spacing={2} mt={5} ml={3}>
            <Stack direction="row" sx={linkStyle} onClick={handleHome}>
              <Home />
              <Typography variant="p" fontSize="16px" fontWeight="bold">
                Home
              </Typography>
            </Stack>
            <Stack direction="row" sx={linkStyle} onClick={handleWorkouts}>
              <FitnessCenter />
              <Typography variant="p" fontSize="16px" fontWeight="bold">
                Search Workouts
              </Typography>
            </Stack>

            <Stack direction="row" sx={linkStyle} onClick={handleAbout}>
              <Code />
              <Typography variant="p" fontSize="16px" fontWeight="bold">
                About Developer
              </Typography>
            </Stack>
          </Stack>
        </MotionInView>
      </Box>
    </>
  );
}

export default Sidebar;
