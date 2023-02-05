
import React , { Component, useState } from "react";
import './MachineList.scss';
import './ApiTab.scss';
import Typography from "@mui/material/Typography";
import SortIcon from '@mui/icons-material/Sort';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ApiTab = () => {

    const [showTab, setShowTab] = useState('Perso Machine');
    const headerMenu = ['Perso Machine', 'Data Stream'];
  
    const showCurrentTab = (item) => {
      setShowTab(item);
    }

    return (
        <div className="api-tab-overview">
            <div className="api-tab-header row">
                <div onClick={()=>showCurrentTab('Data Stream')} className= {showTab==='Data Stream' ? "col-2  api-tab-header-content api-tab-header-content-selected" : "col-2  api-tab-header-content"}>
                <Typography className="machine-tab-title">
                    Data Stream
                </Typography>
                </div>
                <div onClick={()=>showCurrentTab('Perso Machine')} className= {showTab==='Perso Machine' ? "col-2  api-tab-header-content api-tab-header-content-selected" : "col-2  api-tab-header-content"}>
                <Typography className="machine-tab-title">
                    Perso Machine
                </Typography>
                </div>
              <div className="api-tab-header-content col-8"></div>
            </div>
            {
                showTab === 'Perso Machine' &&
                <div className="machine-tab-overview api-tab-content-overview">
                <Typography className="api-tab-title justify-content-flex-start">
                    Authentication
                </Typography>
                <div className="machine-tab-container-info">
                    <Typography className="machine-tab-title justify-content-flex-start">
                        Applications making requests to the Perso Machine API need to provide an authentication token. The active token is displayed here
                        and can be copied and used in a client application                </Typography>
                </div>
                <div className="license-tab-spacing-div"></div>
                <div className="api-tab-token-container row">
                    <Typography className="machine-tab-title justify-content-flex-start col-1 align-items-center">
                        Token
                    </Typography>
                    <input type="text" id="fname" name="fname" className="api-tab-input-field col-8" />
                    <Button
                        className="machine-tab-edit-icon api-tab-view-button col-1"
                    >
                        <VisibilityOffIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                    </Button>
                    <Button
                        className="machine-tab-edit-icon api-tab-reset-button col-1"
                    >
                        <Typography className="machine-tab-title justify-content-flex-start api-tab-btn-colur">
                            Reset
                        </Typography>
                    </Button>
                </div>
                <div className="license-tab-spacing-div"></div>
                <Typography className="api-tab-title justify-content-flex-start">
                    Machine Setup
                </Typography>
                <div className="machine-tab-container w-100">
                    <div className="row machine-tab-table-head">
                        <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                            <div className="row machine-tab-row">
                                <Typography className="machine-tab-title api-tab-head-title col-2 machine-tab-fir-text">
                                    Machine Name
                                </Typography>
                                <SortIcon className='machine-tab-sort-icon col-1' />
                            </div>
                        </div>
                        <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                            <div className="row machine-tab-row">
                                <Typography className="machine-tab-title machine-tab-head-title col-2 machine-tab-display-text">
                                    Machine Type
                                </Typography>
                                <SortIcon className='machine-tab-sort-icon col-1' />
                            </div>
                        </div>
                        <div className="col-3 machine-tab-table-head-col machine-tab-flex-start-text">
                            <div className="row machine-tab-row">
                                <Typography className="machine-tab-title api-tab-head-title-1 col-2 machine-tab-fir-text">
                                    Max Throughput
                                </Typography>
                                <SortIcon className='machine-tab-sort-icon col-1' />
                            </div>
                        </div>
                        <div className="col-1 machine-tab-table-head-col d-flex justify-content-center">
                            <Typography className="machine-tab-title machine-tab-center-text">
                                Edit
                            </Typography></div>
                        <div className="col-2 machine-tab-table-head-col d-flex justify-content-center">
                            <Typography className="machine-tab-title machine-tab-center-text">
                                Remove
                            </Typography></div>
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
                        <div className="col-1 machine-tab-table-head-col machine-tab-center-text">
                            <Button
                                className="machine-tab-edit-icon"
                            >
                                <EditIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                            </Button>
                        </div>
                        <div className="col-2 machine-tab-table-head-col machine-tab-center-text">
                            <Button
                                className="machine-tab-remove-icon"
                            >
                                <ClearIcon sx={{ color: "#fff", width: "13px", height: "13px" }} className=' col-1' />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="license-tab-spacing-div"></div>
                <Row className="license-tab-action-buttons d-flex justify-content-flex-end w-100">
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

export default ApiTab;