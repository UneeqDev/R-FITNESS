import React from "react";
import { Stack, Button, TextField } from "@mui/material";
import { useStateValue } from "../context/StateProvider";

function SearchButton() {
  const { handleChange, search, handleSearch } = useStateValue();
  return (
    <Stack direction="row" mt={4} mb={2}>
      <TextField
        sx={{
          input: {
            fontWeight: "700",
          },
          root: {
            border: "none",
            outline: "none",
            "&: focus": {
              border: "none",
            },
          },
          width: { lg: "500px", md: "350px", xs: "250px" },
          backgroundColor: "white",
          border: "none",
          outline: "none",
          "&: focus": {
            border: "none",
          },
        }}
        height="50px"
        value={search}
        placeholder="search your favorite workouts..."
        type="text"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        size="small"
        type="text"
        sx={{ padding: "5px 10px" }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
}

export default SearchButton;
