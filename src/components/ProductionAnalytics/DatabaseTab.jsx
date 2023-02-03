
import React, { Component } from "react";
import './TabList.scss';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const DatabaseTab = () => {
    return (
        <div className="license-tab-overview">
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography className="license-tab-title">
                        Influx server host
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="fname" name="fname" className="license-tab-input-field" />
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography className="license-tab-title">
                        Influx server port
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="fname" name="fname" className="license-tab-input-field" />
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography className="license-tab-title">
                        Use TLS
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="checkbox" id="useTLS" name="useTLS" value="useTLS" className="license-tab-checkbox-field"/>
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography className="license-tab-title">
                        Token
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <input type="text" id="fname" name="fname" className="license-tab-input-field" />
                </Grid>
            </Grid>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons">
                <Col sm={2}>
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
                <Col sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled
                        className="license-tab-test-license-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            Test Connection
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default DatabaseTab;


