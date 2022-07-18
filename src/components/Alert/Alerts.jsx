import React from "react";
import Nav from "../Common/Content/Nav";
import Page from "../Dashboard/Page";
import NotificationEndpoint from "./NotificationEndpoint";
import NotificationRule from "./NotificationRule";
import Check from "./Check";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

class Alerts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value:'1'};
      
    }
    handle_change = (value) => {
      this.setState({ value })
      
  }
  
    render() {
      let content_array = [<Check></Check>,<NotificationEndpoint></NotificationEndpoint>, <NotificationRule></NotificationRule>, <h1>Third Tab</h1>];
      return (
        <Page>
        <Nav>
          
        <Tabs value={this.state.value} onChange={(e, v) => { this.handle_change(v) }} indicatorColor="primary"
                    textColor="primary" centered>
                    <Tab value='1' label='CHECKS'></Tab>
                    <Tab value='2' label='NOTIFICATION ENDPOINTS'></Tab>
                    <Tab value='3' label='NOTIFICATION RULE'></Tab>
                </Tabs>
                <Paper>
                    {content_array[this.state.value - 1]}
                </Paper>
       
        </Nav>
        </Page>
      );
    }
  }
  export default Alerts;