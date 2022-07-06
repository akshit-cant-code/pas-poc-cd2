// @mui
import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';


// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  color:"white",
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  background:"rgb(24, 22, 22)"
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  sx: PropTypes.object,
};



export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor:"rgb(24, 22, 22)",
        ...sx,
      }}
      {...other}
    >
      
      <Typography  color="white"  sx={{ opacity: 0.12,spacing:1 }}>
        {title}
      </Typography>
      
      <Typography color="white" variant="h6">{total}</Typography>

      
    </Card>
  );
}

