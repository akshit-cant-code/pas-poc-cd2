import React, { useState } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

const TabsContainer = () => {
  const classes = useTabStyles();

  const tabs = ["Query", "", "", "", "", "", ""];

  const [active, setActive] = useState(tabs[0]);

  return (
    <Tabs
      Style={{ right: "0", marginLeft: "auto" }}
      classes={{ root: classes.root, scroller: classes.scroller }}
      value={active}
      onChange={(event, newValue) => {
        setActive(newValue);
      }}
      indicatorColor="primary"
      textColor="primary"
      variant={"scrollable"}
      scrollButtons={"on"}
    >
      {tabs.map((tab, index) => (
        <Tab
          style={{ fontFamily: "nunito", color: "white" }}
          key={index}
          label={tab}
          value={tab}
        />
      ))}
    </Tabs>
  );
};

const NavBar = () => {
  return (
    <MuiThemeProvider>
      <TabsContainer />
    </MuiThemeProvider>
  );
};

export default NavBar;
