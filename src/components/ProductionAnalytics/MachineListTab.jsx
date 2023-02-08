
import React, { Component } from "react";
import './MachineList.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';


const MachineListTab = () => {

    const tempRows = ['DA-PERF-MXD10','AL-DEV2'];

    return (
        <div className="machine-tab-overview">
            <div className="machine-tab-container">
                <div className="row machine-tab-table-head">
                    <div className="col-6 machine-tab-table-head-col machine-tab-flex-start-text">
                        <div className="row machine-tab-row">
                            <Typography className="machine-tab-title machine-tab-head-title col-2">
                                Name
                            </Typography>
                            <SortIcon className='machine-tab-sort-icon col-1' />
                        </div>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Edit
                        </Typography></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Revoke
                        </Typography></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Typography className="machine-tab-title machine-tab-center-text">
                            Remove
                        </Typography></div>
                </div>
                {tempRows.map(item =>{
                 return(
                    <div className="row machine-tab-row machine-tab-row-content">
                    <div className="col-6 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            {item}
                        </Typography>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-edit-icon"
                        >
                            <EditIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className=' col-1' />
                        </Button></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-revoke-icon"
                        >
                            <DoDisturbIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className=' col-1' />
                        </Button></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-remove-icon"
                        >
                            <ClearIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className='col-1' />
                        </Button></div>
                </div>
                 )
                })}
            </div>
            <div className="license-tab-spacing-div"></div>
            <div className="machine-tab-post-container">
                <div className="row machine-tab-row">
                    <div className="col-3 align-items-center d-flex">
                        <Typography className="d-flex justify-content-center machine-tab-title">
                            Machine licenses
                        </Typography>
                    </div>
                    <div className="col-4 row machine-tab-row align-items-center">
                        <Typography className="machine-tab-title col-3">
                            Required
                        </Typography>
                        <input type="number" id="fname" name="fname" className="license-tab-input-field col machine-tab-required-field"  value={2}/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 row machine-tab-row align-items-center">
                        <Typography className="machine-tab-title col-3">
                            Available
                        </Typography>
                        <input type="number" id="fname" name="fname" className="license-tab-input-field col machine-tab-available-field"  value={20}/>
                    </div>
                </div>
            </div>
            <div className="license-tab-spacing-div"></div>
            <Row className="license-tab-action-buttons d-flex justify-content-flex-end w-100 machine-tab-action-buttons">
                <Col sm={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="license-tab-save-btn machine-tab-save-btn"
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
                            Test Machine
                        </Typography>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default MachineListTab;


