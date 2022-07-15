import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import {
  Alert,
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  styled,
  TextField,
  Typography,
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
// import Image from "../assets/SadHeart.png";

const container = {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
const card = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  paddingBottom: "1rem",
  backgroundColor: "aliceblue",
  boxShadow: "10px 10px 10px rgba(0,0,0,0.1)",
  border: "2px solid aliceblue",
};
const ImgStyle = styled("img")({
  width: "100%",
  height: "50%",
  objectFit: "contain",
});

const LinkStyle = styled(Link)({
  textDecoration: "none",
  color: "white",
});
function Exercises() {
  const { exercises, handleChange, search, handleSearch, loading } =
    useStateValue();

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 2000, behavior: "smooth" });
  };

  if (!currentExercises.length) {
    return (
      <>
        <Box
          sx={{
            marginTop: "3rem",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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

          <Alert severity="info">
            Type in a valid search term in the search box such as exercise name,
            body part, target muscle or equipment.
          </Alert>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={container}>
        <Box>
          <Stack direction="row" mt={4} mb={9}>
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
                // borderRadius: "40px 0 0 40px",
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
        </Box>

        <Grid container spacing={6}>
          {currentExercises?.map((exercise, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ margin: { xs: " 0 3rem", sm: "0" } }}
            >
              <Box sx={card}>
                <LinkStyle to={`/exercises/${exercise.id}`}>
                  {loading ? (
                    <Skeleton
                      variant="rectangular"
                      width={210}
                      height={118}
                      animation="wave"
                    />
                  ) : (
                    <ImgStyle
                      src={exercise.gifUrl}
                      alt={exercise.name}
                      loading="lazy"
                    />
                  )}
                  <Stack direction="column">
                    <Stack direction="row" spacing={1} pl={1}>
                      <Typography
                        variant="p"
                        color="secondary"
                        fontWeight="bold"
                      >
                        Name:
                      </Typography>
                      <Typography
                        variant="p"
                        color="primary"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {exercise.name}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} pl={1}>
                      <Typography
                        variant="p"
                        color="secondary"
                        fontWeight="bold"
                      >
                        Target muscle:
                      </Typography>
                      <Typography
                        variant="p"
                        color="primary"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {exercise.target}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} pl={1}>
                      <Typography
                        variant="p"
                        color="secondary"
                        fontWeight="bold"
                      >
                        Body part:
                      </Typography>
                      <Typography
                        variant="p"
                        color="primary"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {exercise.bodyPart}
                      </Typography>
                    </Stack>
                  </Stack>
                </LinkStyle>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Box>
    </>
  );
}

export default Exercises;
