import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";
import NotificationEndpoint from "./NotificationEndpoint";
import NotificationRule from "./NotificationRule";
import Check from "./Check";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material/styles";
import "./style.css";
import Box from "@mui/material/Box";

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "1" };
  }
  handle_change = (value) => {
    this.setState({ value });
  };
  render() {
    let content_array = [
      <Check></Check>,
      <NotificationEndpoint></NotificationEndpoint>,
      <NotificationRule></NotificationRule>,
      <h1>Third Tab</h1>,
    ];
    return (
      <Page>
        <Nav>
          {/* <ThemeProvider theme={darkTheme}> */}
          <Box sx={{ background: "	#FFFFFF" }}>
            <Tabs
              value={this.state.value}
              onChange={(e, v) => {
                this.handle_change(v);
              }}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                value="1"
                label="CHECKS"
                style={{
                  border: 2,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "grey",
                }}
              ></Tab>
              <Tab
                value="2"
                label="NOTIFICATION ENDPOINTS"
                style={{
                  border: 2,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "grey",
                }}
              ></Tab>
              <Tab
                value="3"
                label="NOTIFICATION RULE"
                style={{
                  border: 2,
                  fontWeight: 700,
                  fontSize: 16,
                  color: "grey",
                }}
              ></Tab>
            </Tabs>
            <Paper sx={{ background: "#FFFFFF" }}>
              {content_array[this.state.value - 1]}
            </Paper>
            {/* // </ThemeProvider> */}
          </Box>
        </Nav>
      </Page>
    );
  }
}
export default Alerts;
