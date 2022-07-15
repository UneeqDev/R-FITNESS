import React, { useState } from "react";
import { exerciseOptions, fetchData } from "../utills/fetchData";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useStateValue } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";
import { MotionInView, varFadeInUp } from "../animate";

const container = {
  width: "100vw",
  height: "auto",
  backgroundColor: "#fbf6fb",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
};

function Search() {
  const navigate = useNavigate();
  //----saves search element in this state
  const [search, setSearch] = useState("");


  const { setExercises } = useStateValue();

  
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exerciseData);
      navigate("/exercises");
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Box sx={container} id="search">
      <MotionInView variants={varFadeInUp}>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            color="primary"
            mt={4}
            sx={{ fontWeight: "600", fontSize: { sm: "26px", xs: "22px" } }}
          >
            Search Workouts
          </Typography>
          <Stack direction="row" mt={4} mb={4} spacing={0.7}>
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
                width: { lg: "500px", md: "300px", xs: "270px" },
                backgroundColor: "white",
                border: "none",
                borderRadius: "10px",
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
              sx={{ padding: "5px 10px", borderRadius: "10px" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </MotionInView>
    </Box>
  );
}

export default Search;
