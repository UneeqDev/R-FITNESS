export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ecd6822297msh3515c8eab067d3dp1fd586jsn2ea2495ccd8c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "ecd6822297msh3515c8eab067d3dp1fd586jsn2ea2495ccd8c",
    // "X-RapidAPI-Key": "a6fcfa34d4msh8babf2d4f4d3aa5p133f6djsn01792e7ed976",
    // "X-RapidAPI-Key": "b13a63937emshb2dac7e39f2fc0ep18518bjsn3718001c9c61",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
