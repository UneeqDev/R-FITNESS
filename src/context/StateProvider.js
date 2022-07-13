import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { fetchData, exerciseOptions } from "../utills/fetchData";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  //------state for each body part-----
  const [bodyPart, setBodyPart] = useState("all");

  //-----For All Exercises----
  const [exercises, setExercises] = useState("");

  //for loading component
  const [loading, setLoading] = useState(true);

  //----saves search element in this state
  const [search, setSearch] = useState("");

  //----All Body Parts Categories
  // const [bodyParts, setBodyParts] = useState([]);

  // ensures the user is visiting the exercises page for the first time

  const [showSearch, setShowSearch] = useState(false);
  //for search

  //for bodypartlist

  useEffect(() => {
    // const fetchExercisesData = async () => {
    setLoading(false);
    //   const bodyPartsData = await fetchData(
    //     "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    //     exerciseOptions
    //   );
    //   setBodyParts(["all", ...bodyPartsData]);
    // };
    // fetchExercisesData();
    // console.log(bodyParts);
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

  if (loading) {
    return <Loader />;
  }
  return (
    <DataContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        exercises,
        setExercises,
        handleChange,
        handleSearch,
        search,
        // bodyParts,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useStateValue = () => useContext(DataContext);
export default DataProvider;
