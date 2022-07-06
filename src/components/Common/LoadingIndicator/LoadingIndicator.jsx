import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const LoadingIndicator = ({ isLoading }) => {
  const useStyles = makeStyles(theme => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  }));
  const classes = useStyles();
  return isLoading ? (
    <div id="loadingIndicator">
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  ) : null;
};

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.common.loadingIndicator.isLoading
  };
}

export default connect(mapStateToProps)(LoadingIndicator);
