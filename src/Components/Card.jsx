import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './card.css';

const useStyles = makeStyles((theme) => ({

  media: {
    height: 0,
    paddingTop: '56.25%', 
  },

 
  cardheader:{
    paddingLeft
:"40px",
  },
  
  title:{
    color:"red",
    textAlign:"center"
   
    
  },
  avatar: {
    backgroundColor: red[500],
  },
  language:{
    color:'black'
  }

 
}));
 



export const Card1 = (props) => {
  const classes = useStyles();
  return(
 <div className="card">
    <Card >
       
       
         {/* <h1 className={classes.cardheader}> {props.movies.name} </h1> */}
         {/* <p className={classes.cardheader}> {props.movies.type}</p> */}
         <p className={classes.cardheader}>  {props.movies.language}</p>
         {/* <p className={classes.cardheader}>  {props.movies.summary}</p> */}
        
       
         

 
    
      <CardHeader

     classes={{
       root:classes.cardheader,
      title:classes.title,
    language:classes.language}}
      className={
        classes.cardheader
      }
        // avatar={
        //   <Avatar aria-label="recipe" >
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.movies.name}
      
        // subheader={props.movies.type}
      />
      <cardlanguage
   
      className={classes.language}
      language= {props.movies.language}
      
      

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
  
    
    
  
  </Card>
  </div>
  );}
  
  

  