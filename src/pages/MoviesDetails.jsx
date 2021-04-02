import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function MoviesDetails() {
  const [data, setData] = useState();
  const { movies } = useParams();
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${movies}`)
      .then((Response) => Response.json())
      .then((movies) => setData({ movies }));
  }, []);
  console.log(data);
  console.log(movies);

  return <div>{data?.movies.summary}</div>;
}
