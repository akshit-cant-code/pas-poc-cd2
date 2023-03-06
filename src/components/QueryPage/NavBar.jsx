import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "left",
  },
  scroller: {
    flexGrow: "0",
  },
});

const TabsContainer = () => {
  const classes = useTabStyles();

  const tabs = ["Query"];

  const [active, setActive] = useState(tabs[0]);

  return (
    <Tabs
      Style={{ right: "0", marginLeft: "auto", height: "5px" }}
      classes={{ root: classes.root, scroller: classes.scroller }}
      value={active}
      onChange={(event, newValue) => {
        setActive(newValue);
      }}
      indicatorColor="secondary"
      textColor="primary"
      variant={"scrollable"}
      scrollButtons={"on"}
    >
      {tabs.map((tab, index) => (
        <Tab
          style={{ color: "white" }}
          icon={
            <img
              style={{ marginRight: "5px", marginTop: "5px" }}
              loading="lazy"
              width="15"
              height="15"
              src={"/assets/images/iconQ.png"}
            />
          }
          iconPosition="bottom"
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
      <TabsContainer />
  );
};

export default NavBar;
