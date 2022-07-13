import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { Data } from "../data/AboutData";
import { MotionInView, varFadeInLeft, varFadeInUp } from "../animate";

const container = {
  display: "flex",
  flexDirection: { xs: "column" },
  alignItems: { sm: "flex-start", xs: "center" },
  justifyContent: "center",
  marginTop: { sm: "0", xs: "1rem" },
};
const textStack = {
  alignItems: { sm: "flex-start", xs: "center" },
  textAlign: { sm: "flex-start", xs: "center" },
  paddingLeft: { sm: "1rem", xs: "0" },
};
const gridStack = {
  flexDirection: { sm: "row", xs: "column" },
  alignItems: { sm: "flex-start", xs: "center" },
};
function About() {
  return (
    <>
      <Box>
        <Box sx={container}>
          <MotionInView variants={varFadeInLeft}>
            <Stack
              direction="column"
              sx={{
                alignItems: { xs: "center", sm: "flex-start" },
                justifyContent: { xs: "center", sm: "flex-start" },
              }}
            >
              <Typography
                variant="p"
                sx={{
                  letterSpacing: "3px",
                  fontSize: { sm: "18px", xs: "16px" },
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
                pl={3}
                color="secondary"
              >
                WHY-R-FITNESS
              </Typography>

              <Typography
                sx={{
                  textAlign: { sm: "flexStart", xs: "center" },
                  paddingLeft: { sm: "1rem", xs: "" },
                  marginLeft: { sm: "5px", xs: "" },
                }}
                variant="p"
                fontWeight="bold"
                fontSize="22px"
                mb={6}
              >
                Unique Experiences Tailored To Your Lifestyle.
              </Typography>
            </Stack>
          </MotionInView>
          <Grid
            container
            spacing={3}
            sx={{
              marginLeft: { sm: "2rem", xs: "0" },
            }}
            width="90%"
          >
            {Data.map((item, index) => (
              <Grid xs={12} key={index} mb={2}>
                <MotionInView variants={varFadeInUp}>
                  <Stack spacing={2} sx={gridStack}>
                    <Icon icon={item.Image} width="50" height="50" />
                    <Stack direction="column" sx={textStack}>
                      <Typography
                        color="secondary"
                        variant="h6"
                        sx={{ fontSize: { sm: "18px", xs: "17px" } }}
                        fontWeight="bold"
                      >
                        {item.Header}
                      </Typography>
                      <Typography color="primary" variant="p">
                        {item.Subheader}
                      </Typography>
                    </Stack>
                  </Stack>
                </MotionInView>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default About;
