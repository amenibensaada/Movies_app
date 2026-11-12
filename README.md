# TV show explorer

An earlier React application for browsing TVMaze shows, filtering/searching the catalogue and viewing show/episode details. Uses React Router and Material UI. The historical repository name is Movies_app; the data source is TVMaze television shows.

[Current portfolio](https://amenibensaada.tn/?utm_source=github&utm_medium=profile&utm_campaign=personal_brand) · Educational React project.

## Run

```sh
npm ci
npm start
```

The Create React App development server normally uses port 3000. The app calls TVMaze’s public API; no application API key is required. Internet access and the third-party API’s availability affect results.

- `src/pages/MoviesListPage.jsx`: catalogue fetching/display.
- `src/pages/MoviesDetails.jsx`: show and episode details.
- `src/Components`: search, cards and navigation.

`npm run build` creates the production assets. `npm test` starts the original CRA test harness; its presence does not mean full feature coverage. React 17/CRA 4 are historical dependencies; use a compatible toolchain and review them before hosting a new production service. API calls use HTTPS. No hosted demo is claimed here.
