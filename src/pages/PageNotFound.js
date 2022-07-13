import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const boxStyle = {
  display: "flex",
  width: "100vw",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
};
function PageNotFound() {
  return (
    <>
      <Box sx={boxStyle}>
        <Stack direction="column">
          <Typography variant="h1" color="secondary">
            404
          </Typography>
          <Typography variant="h5">Page Not Found</Typography>
        </Stack>
      </Box>
    </>
  );
}

export default PageNotFound;
