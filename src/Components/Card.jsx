import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUICard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },

  cardheader: {
    paddingLeft: "40px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    forcedColorAdjust: "#95dada",
    border: "1px solid gray",
    padding: "25px",
    cursor: "pointer",
    transform: "translateZ(0)",
    transition: "transform 0.25s ease-out",
    height: "90%",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  title: {
    color: "red",
    textAlign: "center",
  },
  avatar: {
    backgroundColor: red[500],
  },
  language: {
    color: "black",
  },
}));
const Card = (props) => {
  const classes = useStyles();
  return (
    <MUICard className={classes.card}>
      {/* <h1 className={classes.cardheader}> {props.movies.name} </h1> */}
      {/* <p className={classes.cardheader}> {props.movies.type}</p> */}
      <p className={classes.cardheader}> {props.movies.language}</p>
      {/* <p className={classes.cardheader}>  {props.movies.summary}</p> */}

      <CardHeader
        classes={{
          root: classes.cardheader,
          title: classes.title,
          language: classes.language,
        }}
        className={classes.cardheader}
        title={props.movies.name}
      />
      <cardlanguage
        className={classes.language}
        language={props.movies.language}
      />

      <CardMedia
        className={classes.media}
        image={props.movies.image.original}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.movies.summary}
        </Typography>
      </CardContent>
    </MUICard>
  );
};
//we always export as default
export default Card;
