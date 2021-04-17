import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { SearchBox } from "../Components/SearchBox.jsx";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

export default class MoviesListPage extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("http://api.tvmaze.com/shows")
      .then((Response) => Response.json())
      .then((movies) => this.setState({ movies }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { movies, searchField } = this.state;
    const filterdMovies = movies.filter((movie) =>
      movie?.name?.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Grid container spacing={4}>
        <Grid item lg={12}>
          <SearchBox
            placeholder="Search Movies"
            handleChange={this.handleChange}
          />
        </Grid>
        {filterdMovies.map((movie) => (
          <Grid item lg={4}>
            <Link to={`/${movie.id}`}>
              <Card key={movie.id} movies={movie} />
            </Link>
          </Grid>
        ))}
        );
      </Grid>
    );
  }
}
