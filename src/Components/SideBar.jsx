import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import {
  IconButton,
  AppBar,
  Hidden,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  Grid,
  Button,
  InputBase,
  Select,
  FormControl,
  MenuItem,
  Typography,
  Toolbar,
  makeStyles,
  useTheme,
  withStyles,
  Card,
} from "@material-ui/core";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#181818",
      borderRight: "1px solid white",
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#181818",
    color: "white",
  },
  header: {},

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "#808080 ",

    width: "30%",
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      color: "white",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#323D3F",
    border: "1px solid #323D3F",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function ResponsiveDrawer(props) {
  const { movies: movieId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${movieId}`)
      .then((Response) => Response.json())
      .then((movies) => {
        setData(movies);
      });
  }, []);
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [age, setAge] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const drawer = (
    <div className={classes.root}>
      <Box>
        <Typography
          fontSize="18px"
          style={{
            marginBottom: "10px",
            marginLeft: "6px",
            fontWeight: "bold",
          }}
        >
          Filter
        </Typography>

        <FormControl className={classes.formControl}>
          <Typography
            id="demo-simple-select-label"
            style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
          >
            Any Country
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Divider />
        <FormControl className={classes.formControl}>
          <Typography
            id="demo-simple-select-label"
            style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
          >
            Any Genre
          </Typography>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />

      <Typography
        fontSize="18px"
        style={{
          marginBottom: "10px",
          marginLeft: "6px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        Sorting
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <FormControl className={classes.formControl}>
            <Typography
              id="demo-simple-select-label"
              style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
            >
              Years
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={10}>2001</MenuItem>
              <MenuItem value={20}>2030</MenuItem>
              <MenuItem value={30}>2009</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6}>
          <FormControl className={classes.formControl}>
            <Typography
              id="demo-simple-select-label"
              style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
            >
              Rating
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={10}>2001</MenuItem>
              <MenuItem value={20}>2030</MenuItem>
              <MenuItem value={30}>2009</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <FormControl className={classes.formControl}>
        <Typography
          id="demo-simple-select-label"
          style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
        >
          Age Limit
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>2001</MenuItem>
          <MenuItem value={20}>2030</MenuItem>
          <MenuItem value={30}>2009</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Typography
          id="demo-simple-select-label"
          style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
        >
          Seasons
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>2001</MenuItem>
          <MenuItem value={20}>2030</MenuItem>
          <MenuItem value={30}>2009</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Typography
          id="demo-simple-select-label"
          style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}
        >
          Voice Acting
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>2001</MenuItem>
          <MenuItem value={20}>2030</MenuItem>
          <MenuItem value={30}>2009</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <Typography
        fontSize="18px"
        style={{
          marginBottom: "10px",
          marginLeft: "6px",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        Search
      </Typography>
      <FormControl>
        <BootstrapInput
          id="demo-customized-textbox"
          style={{ marginLeft: "6px", width: "80%" }}
        />
      </FormControl>
      <Button
        variant="contained"
        style={{
          color: "green",
          marginTop: "20px",
          marginLeft: "6px",
          width: "80%",
        }}
      >
        Show me
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.header} variant="h6" noWrap>
            Back
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
