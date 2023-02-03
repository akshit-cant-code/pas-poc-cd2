
import React, { Component } from "react";
import './MachineList.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';


const ShiftTab = () => {

    return (
        <div className="machine-tab-overview">
            <div className="machine-tab-container">
                <div className="row machine-tab-table-head">
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-shift-text">
                                Shift Name
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2">
                                Start
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2">
                                End
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-4 machine-tab-table-head-col d-flex justify-content-flex-start">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Days
                        </Typography></div>
                    <div className="col-1 machine-tab-table-head-col machine-tab-center-text"></div>
                    <div className="col-1 machine-tab-table-head-col machine-tab-center-text"></div>
                </div>
                <div className="row machine-tab-row machine-tab-row-content">
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            Shift 1
                        </Typography>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            10:00 AM
                        </Typography>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            10:00 PM
                        </Typography>
                    </div>
                    <div className="col-4 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
                        </Typography>
                    </div>
                    <div className="col-1 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-edit-icon"
                        >
                            <EditIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                        </Button>
                    </div>
                    <div className="col-1 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-remove-icon"
                        >
                            <ClearIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className='col-1' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons d-flex justify-content-flex-end w-100 machine-tab-action-buttons">
                <Col sm={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled
                        className="license-tab-test-license-btn"
                    >
                        <Typography className="license-tab-title license-tab-title-btn">
                            Add Shift
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default ShiftTab;


