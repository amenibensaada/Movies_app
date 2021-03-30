import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { SearchBox } from "./Components/SearchBox.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Card1 } from "./Components/Card.jsx";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import MoviesDetails from "./Components/MoviesDetails";

class App extends Component {
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
    console.log(this.state.movies);
    const { movies, searchField } = this.state;
    const filterdMovies = movies.filter((movie) =>
      movie?.name?.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <SearchBox
            placeholder="Search Movies"
            handleChange={this.handleChange}
          />
        </Grid>
        {filterdMovies.map((movie) => (
          <Grid item lg={4}>
            <Card1 key={movie.id} movies={movie} />
          </Grid>
        ))}
        );
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path={"/movies"} component={MoviesDetails} />
          </Switch>
        </Router>
      </Grid>
    );
  }
}

export default App;
