import React from "react";
import { Box, Typography } from "@material-ui/core";
export default function MovieListItem({ title, value }) {
  return (
    <Box display="flex" alignItems="center">
      <Typography style={{ fontWeight: "bold", color: "white" }}>
        {title}:
      </Typography>
      <Typography
        style={{ marginLeft: "5px", color: "#939393" }}
        color="textSecondary"
      >
        {value}
      </Typography>
    </Box>
  );
}
