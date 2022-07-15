import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
// import ExerciseVideos from "../components/ExerciseVideos";

import {
  fetchData,
  exerciseOptions,
  // youtubeOptions,
} from "../utills/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exerciseVideos, setExerciseVideos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      //exercisedburl and youtubeSearchdbUrl
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      // const youTubeSearchUrl =
      //   "https://youtube-search-and-download.p.rapidapi.com";

      //fetching each exercise detail data
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      //fetching each exercise video data using the exerciseDetailname as the search query
      // const exerciseVideosData = await fetchData(
      //   `${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,
      //   youtubeOptions
      // );

      // setExerciseVideos(exerciseVideosData);
      // console.log(exerciseVideos);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        {/* <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        /> */}
      </Box>
    </>
  );
};

export default ExerciseDetails;
