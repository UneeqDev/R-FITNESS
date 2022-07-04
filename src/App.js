import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";
const LazyExerciseDetails = React.lazy(() => import("./pages/ExerciseDetails"));
const LazyExercises = React.lazy(() => import("./pages/Exercises"));
const LazyAboutDeveloper = React.lazy(() => import("./pages/AboutDeveloper"));

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exercises"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyExercises />
            </React.Suspense>
          }
        />
        <Route
          path="/exercises/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyExerciseDetails />
            </React.Suspense>
          }
        />
        <Route
          path="/aboutdeveloper"
          element={
            <React.Suspense fallback={<Loader />}>
              <LazyAboutDeveloper />
            </React.Suspense>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
