import { Grid } from "@mui/material";
import React from 'react';

const Content = ({ children }) => {
  return (
    <Grid>
      {children}
    </Grid>
  );
};

export default Content;
