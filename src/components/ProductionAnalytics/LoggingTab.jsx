
import React, { Component } from "react";
import './TabList.scss';
import './MachineList.scss';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const LoggingTab = () => {
    return (
        <div className="license-tab-overview">
            <div className="machine-tab-container-error-info">
                <Typography className="machine-tab-title justify-content-flex-start">
                    Measurement Accumulator service is not running.Start the service to save the configuration.
                </Typography>
            </div>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Portal Logging level
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <select name="cars" id="cars" className="license-tab-input-field license-tab-title select-field">
                        <option value="verbose" className="license-tab-title">Verbose</option>
                    </select>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2} className="license-tab-main-title">
                    <Typography className="license-tab-title">
                        Accumulator Logging level
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <select name="cars" id="cars" className="license-tab-input-field license-tab-title select-field">
                        <option value="verbose" className="license-tab-title">Verbose</option>
                    </select>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons">
                <Col sm={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="license-tab-save-btn"
                    >
                        <Typography className="license-tab-title">
                            Save
                        </Typography>

                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default LoggingTab;


