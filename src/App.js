import "./App.css";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesListPage from "./pages/MoviesListPage";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/"} component={MoviesListPage} />
          <Route exact path={"/:movies"} component={MoviesDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
