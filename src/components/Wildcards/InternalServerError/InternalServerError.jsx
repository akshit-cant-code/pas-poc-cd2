import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  content: {
    marginBottom: theme.spacing(4)
  }
}));

const InternalServerError = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} justify="center" className={classes.container}>
      <div className="no-record">
        <div className={classes.heading}>
          <Typography variant="h5">Sorry, Something went wrong.</Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            We are not able to complete your action. We have been notified about
            the problem and will resolve it as soon as possible.
          </Typography>
        </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        size="medium"
        disableElevation
      >
        Home
      </Button>
    </Paper>
  );
};

export default InternalServerError;
