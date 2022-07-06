import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';

import { I18N_CONSTANTS } from '../../../constants';

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

const Unauthorized = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} justify="center" className={classes.container}>
      <div className="no-record">
        <div className={classes.heading}>
          <Typography variant="h5">Oops</Typography>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            You are not authorized to view this page.
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

function mapStateToProps(state) {
  return {
    session: state.session
  };
}

Unauthorized.propTypes = {};

const component = connect(mapStateToProps)(Unauthorized);
export default withRouter(withTranslation(I18N_CONSTANTS.NAMESPACE.APP)(component));
