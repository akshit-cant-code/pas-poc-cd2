import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { Component, useState } from "react";
import './Dashboard.scss';
import Typography from "@mui/material/Typography";
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import LicenseTab from "./LicenseTab";
import DatabaseTab from "./DatabaseTab";
import AccumulatorSetupTab from "./AccumulatorSetupTab";
import MachineListTab from "./MachineListTab";
import ShiftTab from "./ShiftsTab";
import OperationalComparisonTab from "./OperationalComparisonTab";

const NewDashboard = () => {

  const [showTab, setShowTab] = useState('License');
  const headerMenu = ['License', 'Database', 'Machines', 'Shifts', 'Operational Comparison', 'API', 'Accumulator Setup', 'Logging', 'Events'];

  const showCurrentTab = (item) => {
    setShowTab(item);
  }

  return (
    <div className="production-analytics-dashboard">
      <div>
        <AppBar className="production-analytics-dashboard-appBar">
          <Toolbar>
            <img
              loading="lazy"
              width="15"
              height="15"
              src={"/assets/images/entrust.svg"}
              className='production-analytics-header-image'
            />
            <InfoIcon sx={{ color: "#fff" }} className='production-analytics-info-icon' />
          </Toolbar>
        </AppBar>
      </div>
      <div className="production-analytics-dashboard-body">
        <Grid container >
          <Grid item xs={2} className='production-analytics-side-div'>
            <div className="production-analytics-dashboard-body-first row production-analytics-side-div-content">
              <SettingsIcon sx={{ color: "#151414" }} className='production-analytics-settings-icon col-1' />
              <Typography className="production-analytics-dashboard-body-title col-2">
                Configuration
              </Typography>
              <div className="production-analytics-blue-background"></div>
            </div>

          </Grid>
          <Grid item xs={0.2}></Grid>
          <Grid item xs={9.8}>
            <div className="production-analytics-dashboard-main-container">
              <div className="production-analytics-dashboard-main-container-header">
                <Grid container spacing={1} className='production-analytics-grid'>
                  {
                    headerMenu.map((item, index) => {
                      return (
                        <Grid item xs={(index === 4 || index === 6) ? 2 : 1} className={showTab === item ? 'production-analytics-grid-item production-analytics-grid-item-selected' : 'production-analytics-grid-item'}>
                          <div onClick={() => showCurrentTab(item)} className='production-analytics-onclick-handler'>
                            <span className="production-analytics-dashboard-header-title">
                              {item}
                            </span>
                            <span className="production-analytics-dashboard-vertical-segment"></span>
                          </div>
                        </Grid>
                      )
                    })
                  }
                </Grid>
                <div></div>
              </div>
              {
                showTab === 'License' ? <LicenseTab /> : showTab === 'Database' ? <DatabaseTab /> :
                  showTab === 'Machines' ? <MachineListTab />
                    : showTab === 'Shifts' ?
                      <ShiftTab /> :
                      showTab === 'Operational Comparison' ?
                        <OperationalComparisonTab />
                        :
                        <AccumulatorSetupTab />
              }
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default NewDashboard;


