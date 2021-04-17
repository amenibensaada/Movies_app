import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core/";
import StarIcon from "@material-ui/icons/Star";
import MovieListItem from "../Components/MovieListItem";
import ResponsiveDrawer from "../Components/SideBar";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "79.3vw",
    overflow: "hidden",
    backgroundColor: "#181818",
    marginLeft: "300px",
    marginTop: "60px",
  },
  picture: {
    width: "300px",
  },
  name: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
  },
  summary: {
    color: "#939393",
  },
}));
export default function MoviesDetails() {
  const [movies, setMovies] = useState([]);

  const classes = useStyles();
  const { movies: movieId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${movieId}`)
      .then((Response) => Response.json())
      .then((movies) => {
        setData(movies);
      });
    fetch(`https://api.tvmaze.com/shows/${movieId}/episodes`)
      .then((Response) => Response.json())
      .then((movies) => setMovies(movies));
  }, []);
  console.log({ data, movieId });
  const ratingsStars = new Array(
    Math.trunc(data?.rating ? data?.rating?.average : 1)
  ).fill(<StarIcon style={{ color: "white" }} />);
  console.log({ ratingsStars });
  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12} lg={3}>
        <Box display="flex" flexDirection="column">
          <img
            className={classes.picture}
            src={data?.image?.original}
            alt="movie pictured"
          />
          <MovieListItem title="Rating IMDB" value={data?.rating?.average} />
          <Box display="flex" alignItems="center">
            {ratingsStars}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Typography className={classes.name}>{data?.name}</Typography>
            <Typography className={classes.summary} color="textSecondary">
              ( {data?.language})
            </Typography>
          </Box>
          <Typography className={classes.summary} color="textSecondary">
            {data?.summary}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <MovieListItem title="Genre" value={data?.genres?.join(",")} />
          <MovieListItem title="Status" value={data?.status} />
          <MovieListItem title="Country" value={data?.network?.country?.name} />
          <MovieListItem title="Released" value={data?.premiered} />
          <MovieListItem title="Director" value={data?.network?.name} />
        </Box>

        <Box display="flex" flexDirection="column">
          <ResponsiveDrawer title="Genre" value={data?.genres?.join(",")} />
        </Box>
      </Grid>
      <Grid container spacing={4}>
        {movies.map((movie) => (
          <Grid item lg={4}>
            <Link to={`/${movie.id}`}>
              <Card key={movie.id} movies={movie} />
            </Link>
          </Grid>
        ))}
        );
      </Grid>
    </Grid>
  );
}

export { MoviesDetails };
