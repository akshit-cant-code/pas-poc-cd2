
import React, { Component, useState } from "react";
import './MachineList.scss';
import './ApiTab.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const ModulesTab = () => {

    return (
        <div className="machine-tab-overview-container">
            <div className="machine-tab-container">
                <div className="row machine-tab-table-head">
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-fir-text">
                                Module
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-fir-text">
                                Enabled
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-4 machine-tab-table-head-col d-flex justify-content-center">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Edit
                        </Typography></div>
                </div>
                <div className="row machine-tab-row machine-tab-row-content">
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            JS
                        </Typography>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            True
                        </Typography>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-edit-icon"
                        >
                            <EditIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className=' col-1' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons d-flex justify-content-flex-end w-100 machine-tab-action-buttons">
                <Col sm={2}>
                    <Button
                        className="license-tab-test-license-btn op-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            Add
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default ModulesTab;