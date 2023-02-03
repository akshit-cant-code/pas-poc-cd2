
import React, { Component } from "react";
import './MachineList.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { Button } from '@material-ui/core';


const MachineListTab = () => {

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
                <div className="row machine-tab-row machine-tab-row-content">
                    <div className="col-6 machine-tab-table-head-col machine-tab-flex-start-text">
                        <Typography className="machine-tab-title">
                            AL-DEV2
                        </Typography>
                    </div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-edit-icon"
                        >
                            <EditIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                        </Button></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-revoke-icon"
                        >
                            <DoDisturbIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                        </Button></div>
                    <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                        <Button
                            className="machine-tab-remove-icon"
                        >
                            <ClearIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className='col-1' />
                        </Button></div>
                </div>
            </div>
            <div className="license-tab-spacing-div"></div>
            <div className="machine-tab-post-container">
                <div className="row machine-tab-row">
                    <div className="col-4">
                        <Typography className="machine-tab-title">
                            Machine licenses
                        </Typography>
                    </div>
                    <div className="col-4">
                        <Typography className="machine-tab-title">
                            Required
                        </Typography>
                    </div>
                    <div className="col-4">
                        <Typography className="machine-tab-title">
                            Available
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MachineListTab;


