import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utills/fetchData";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useStateValue } from "../context/StateProvider";
import { useNavigate } from "react-router-dom";
import { MotionInView, varFadeInUp } from "../animate";
import { Link as ScrollLink } from "react-scroll";
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

  //----All Body Parts Categories
  const [bodyParts, setBodyParts] = useState([]);
  const [termExists, setTermExists] = useState(false);

  //----from the data layer StateProvider
  const { exercises, setExercises } = useStateValue();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
    console.log(bodyParts);
  }, []);

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
      {/* -----exclusive class container ---- */}
      {/* <Box
        sx={{
          display: "flex",
          height: "50vh",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw ",
          padding: "0 1rem",
          position: "relative",

          justifyContent: "center",
          backgroundColor: "pink",
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          sx={{
            fontWeight: "600",
            fontSize: { sm: "24px", xs: "20px" },
            display: "flex",
            justifyContent: "center",
          }}
          mt={3}
        >
          Explore Our All Inclusive <br />
          Exercises
        </Typography>

        <HorizontalScrollbar data={bodyParts} />
      </Box> */}
    </Box>
  );
}

export default Search;
