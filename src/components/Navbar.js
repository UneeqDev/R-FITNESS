import React, { useState } from "react";

import { Typography, AppBar, Toolbar, Stack } from "@mui/material";

import Sidebar from "./Sidebar";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Cancel } from "@mui/icons-material";
import { MotionInView, varZoomIn } from "../animate";

function Navbar() {
  const [sideNav, setSideNav] = useState(false);
  const sideNavToggler = () => {
    setSideNav((prev) => !prev);
  };
  return (
    <>
      <AppBar position="relative">
        <Sidebar sideNav={sideNav} setSideNav={setSideNav} />
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Typography variant="h3" color="secondary">
              R
            </Typography>
            <Typography variant="p" sx={{ fontWeight: "bold", color: "white" }}>
              Fitness
            </Typography>
          </Stack>
          <Stack direction="row">
            {!sideNav ? (
              <WidgetsIcon
                sx={{ cursor: "pointer" }}
                onClick={sideNavToggler}
              />
            ) : (
              <MotionInView variants={varZoomIn}>
                <Cancel sx={{ cursor: "pointer" }} onClick={sideNavToggler} />
              </MotionInView>
            )}
            {/* <Link style={{ color: "white", textDecoration: "none" }} to="/">
              <Typography variant="p" fontSize="20px">
                Home
              </Typography>
            </Link>
            <ScrollLink
              style={{
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
              to="search"
              spy={true}
              duration={1000}
              smooth={true}
            >
              <Typography variant="p" fontSize="20px">
                Exercises
              </Typography>
            </ScrollLink> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
