
import React, { Component, useState } from "react";
import './MachineList.scss';
import './ApiTab.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

const OperationalComparisonTab = () => {

    const [showTab, setShowTab] = useState('FIR Fields');
    const headerMenu = ['FIR Fields', 'Modules'];

    const showCurrentTab = (item) => {
        setShowTab(item);
    }

    return (
        <div className="api-tab-overview">
            <div className="api-tab-header row">
                <div onClick={() => showCurrentTab('FIR Fields')} className={showTab === 'FIR Fields' ? "col-2  api-tab-header-content api-tab-header-content-selected" : "col-2  api-tab-header-content"}>
                    <Typography className="machine-tab-title">
                        FIR Fields
                    </Typography>
                </div>
                <div onClick={() => showCurrentTab('Modules')} className={showTab === 'Modules' ? "col-2  api-tab-header-content api-tab-header-content-selected" : "col-2  api-tab-header-content"}>
                    <Typography className="machine-tab-title">
                        Modules
                    </Typography>
                </div>
                <div className="api-tab-header-content col-8"></div>
            </div>
            {
                showTab === 'FIR Fields' &&
                <div className="machine-tab-overview">
                    <div className="machine-tab-container-info api-tab-first-info-container">
                        <Typography className="machine-tab-title justify-content-flex-start">
                            Follow these guidelines to ensure that the FIR fields do not impact performance negatively.
                        </Typography>
                        <ul>
                            <li>
                                <Typography className="machine-tab-title justify-content-flex-start" >
                                    The FIR field name must match exactly the name that is used on the machine.
                                </Typography>
                            </li>
                            <li>
                                <Typography className="machine-tab-title justify-content-flex-start">
                                    Limit  FIR fields to those needed for critical business purposes. The maximum allowed by Production Analytics is 10.
                                </Typography>
                            </li>
                            <li>
                                <Typography className="machine-tab-title justify-content-flex-start">
                                    Ideally, the FIR fields contain less than 20 unique values, such as customer names or form IDs, and no more than 100 unique values.
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <div className="license-tab-spacing-div"></div>
                    <div className="machine-tab-container">
                        <div className="row machine-tab-table-head">
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <div className="row machine-tab-row">
                                    <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-fir-text">
                                        FIR Field
                                    </Typography>
                                    <SortIcon className='machine-tab-sort-icon col-1' />
                                </div>
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <div className="row machine-tab-row">
                                    <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-display-text">
                                        Display Name
                                    </Typography>
                                    <SortIcon className='machine-tab-sort-icon col-1' />
                                </div>
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <div className="row machine-tab-row">
                                    <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-fir-text">
                                        Enabled
                                    </Typography>
                                    <SortIcon className='machine-tab-sort-icon col-1' />
                                </div>
                            </div>
                            <div className="col-3 machine-tab-table-head-col d-flex justify-content-center">
                                <Typography className="machine-tab-title machine-tab-center-text">
                                    Edit
                                </Typography></div>
                        </div>
                        <div className="row machine-tab-row machine-tab-row-content">
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <input type="text" id="fname" name="fname" className="license-tab-input-field" />
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <input type="text" id="fname" name="fname" className="license-tab-input-field" />
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <input type="checkbox" id="useTLS" name="useTLS" value="useTLS" className="license-tab-checkbox-field" />
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-center-text">
                                <Button
                                    className="machine-tab-edit-icon"
                                >
                                    <EditIcon sx={{ color: "#fff", width: "11px", height: "11px" }} className=' col-1' />
                                </Button>
                            </div>
                        </div>
                        <div className="row machine-tab-row machine-tab-row-content">
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <Typography className="machine-tab-title">
                                    JS
                                </Typography>
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <Typography className="machine-tab-title">
                                    JobSetup
                                </Typography>
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                                <Typography className="machine-tab-title">
                                    True
                                </Typography>
                            </div>
                            <div className="col-3 machine-tab-table-head-col machine-tab-center-text">
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
                                variant="contained"
                                color="primary"
                                disabled
                                className="license-tab-test-license-btn"
                            >
                                <Typography className="license-tab-title license-tab-title-btn">
                                    Add
                                </Typography>
                            </Button>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    );
};

export default OperationalComparisonTab;