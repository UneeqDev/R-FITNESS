function useFetch() {
  const exerciseOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b13a63937emshb2dac7e39f2fc0ep18518bjsn3718001c9c61",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = response.json();
    return data;
  };
  return { fetchData, exerciseOptions };
}

export default useFetch;
