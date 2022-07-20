import React, { useState, useEffect, useRef } from "react";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import Page from "./Page";
import { Card } from "@mui/material";
import Gauge from "../Graph/Gauge";
import Discrete from "../Graph/Discrete";
import Pie from "../Graph/Pie";
import Point from "../Graph/Point";
import Line from "../Graph/Line";
import Bar from "../Graph/Bar";
import StackedBar from "../Graph/StackedBar";
import HeatMap from "../Graph/HeatMap";
import Table from "../Graph/Table";
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";
import { sessionAction } from "../../redux/actions";
import { APP_CONSTANTS, I18N_CONSTANTS } from "../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import GridLayout from "react-grid-layout";
import "./ReactGrid.css";
import Nav from "../Common/Content/Nav";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Tooltip from "@mui/material/Tooltip";

var pointChart = [
  {
    name: "Machine 1",
    type: "scatter",
    symbolSize: 5,
    data: [["2022-06-29T06:04:17Z", 0.5212745327966313]],
  },
  {
    name: "Machine 2",
    type: "scatter",
    symbolSize: 5,
    data: [["2022-06-29T06:04:17Z", 0.5212745327966313]],
  },
  {
    name: "Machine 3",
    type: "scatter",
    symbolSize: 5,
    data: [["2022-06-29T06:04:17Z", 0.5212745327966313]],
  },
];

var dataListCardSetup = [
  { value: 1048, name: "CardSetUp1" },
  { value: 735, name: "CardSetUp2" },
  { value: 580, name: "CardSetUp3" },
  { value: 484, name: "CardSetUp4" },
  { value: 300, name: "CardSetUp5" },
  { value: 10, name: "CardSetUp6" },
  { value: 104, name: "CardSetUp7" },
  { value: 75, name: "CardSetUp8" },
  { value: 80, name: "CardSetUp9" },
  { value: 84, name: "CardSetUp10" },
  { value: 300, name: "CardSetUp11" },
  { value: 102, name: "CardSetUp12" },
  { value: 148, name: "CardSetUp13" },
  { value: 750, name: "CardSetUp14" },
  { value: 500, name: "CardSetUp15" },
  { value: 44, name: "CardSetUp16" },
  { value: 390, name: "CardSetUp17" },
  { value: 190, name: "CardSetUp18" },
  { value: 108, name: "CardSetUp19" },
  { value: 35, name: "CardSetUp20" },
  { value: 50, name: "CardSetUp21" },
  { value: 44, name: "CardSetUp22" },
  { value: 90, name: "CardSetUp23" },
  { value: 1000, name: "CardSetUp24" },
];

var dataListJobSetup = [
  { value: 148, name: "JobSetUp1" },
  { value: 35, name: "JobSetUp2" },
  { value: 80, name: "JobSetUp3" },
  { value: 84, name: "JobSetUp4" },
  { value: 100, name: "JobSetUp5" },
  { value: 100, name: "JobSetUp6" },
  { value: 204, name: "JobSetUp7" },
  { value: 175, name: "JobSetUp8" },
  { value: 180, name: "JobSetUp9" },
  { value: 184, name: "JobSetUp10" },
  { value: 1300, name: "JobSetUp11" },
  { value: 1102, name: "JobSetUp12" },
  { value: 1148, name: "JobSetUp13" },
  { value: 1750, name: "JobSetUp14" },
  { value: 1500, name: "JobSetUp15" },
  { value: 144, name: "JobSetUp16" },
];

const layout = [
  { i: "a", x: 0, y: 0, w: 7, h: 8 },
  { i: "d", x: 8, y: 0, w: 5, h: 8 },
  { i: "e", x: 0, y: 8, w: 7, h: 8 },
  { i: "f", x: 7, y: 8, w: 5, h: 8 },
  { i: "g", x: 0, y: 16, w: 12, h: 8 },
];

const DynamicGraph = (props) => {
  const [point, setPoint] = useState(0);
  const [discrete, setDiscrete] = useState(0);
  const [bar, setBar] = useState(0);
  const [line, setLine] = useState(0);

  const [stack, setStack] = useState(0);
  const [grid, setGrid] = useState();
  const elementRef = useRef(null);

  useEffect(() => {
    //setWidth(elementRef.current.clientWidth);
    const points = document.querySelector(".point").offsetWidth;

    const discretes = document.querySelector(".discrete").offsetWidth;
    const bars = document.querySelector(".bar").offsetWidth;
    const lines = document.querySelector(".lines").offsetWidth;

    const stacks = document.querySelector(".stack").offsetWidth;

    setPoint(points);

    setDiscrete(discretes);
    setBar(bars);
    setLine(lines);

    setStack(stacks);
  }, [grid]);

  const handleLayoutChange = (layout) => {
    //const lay = JSON.stringify(layout);
    setGrid(layout);
  };

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : layout;
  };

  const saveLayouts = () => {
    localStorage.setItem("grid-layout", JSON.stringify(grid));
  };

  const { session, t } = props;
  console.log({ session, t });
  // console.log("height", this.state.height);
  return (
    <Page title="Dashboard" style={{ background: "black" }}>
      <Nav>
        <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Grid
            title="Save Layout"
            style={{ paddingLeft: "88.5%", marginBottom: "0.5%" }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={saveLayouts}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid container spacing={1}>
            <GridLayout
              className="layout"
              layout={getLayouts()}
              cols={12}
              rowHeight={30}
              width={1200}
              onLayoutChange={handleLayoutChange}
            >
              <Grid key="a" className="point">
                <Card
                  ref={elementRef}
                  sx={{
                    height: "inherit",
                    width: "inherit",
                    background: "rgb(24, 22, 22)",
                  }}
                >
                  <Point pointWidth={point} dataList={pointChart}></Point>
                </Card>
              </Grid>

              <Grid key="d" className="stack">
                {/* { <AppWidgetSummary title="Output Rate" total={"1,179 cph"}   /> } */}

                <Card
                  sx={{
                    height: "inherit",
                    width: "inherit",
                    background: "rgb(24, 22, 22)",
                  }}
                >
                  {<StackedBar stackWidth={stack}></StackedBar>}
                </Card>
              </Grid>

              <Grid item key="e" className="lines">
                <Card
                  sx={{
                    height: "inherit",
                    width: "inherit",
                    background: "rgb(24, 22, 22)",
                  }}
                >
                  {<HeatMap heatWidth={line}></HeatMap>}
                </Card>
              </Grid>

              <Grid item key="f" className="bar">
                <Card
                  sx={{
                    height: "inherit",
                    width: "inherit",
                    background: "rgb(24, 22, 22)",
                  }}
                >
                  {<Bar barWidth={bar}></Bar>}
                </Card>
              </Grid>

              <Grid item key="g" className="discrete">
                <Card
                  sx={{
                    height: "inherit",
                    width: "inherit",
                    background: "rgb(24, 22, 22)",
                  }}
                >
                  {<Table></Table>}
                </Card>
              </Grid>
            </GridLayout>
          </Grid>
        </Container>
      </Nav>
    </Page>
  );
};

// DynamicGraph.propTypes = {
//   session: PropTypes.shape({
//     currentTheme: PropTypes.string.isRequired,
//   }).isRequired,
//   actions: PropTypes.shape({
//     currentTheme: PropTypes.func.isRequired,
//   }).isRequired,
//   t: PropTypes.func.isRequired,
// };
function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...sessionAction }, dispatch),
  };
}

const component = connect(mapStateToProps, mapDispatchToProps)(DynamicGraph);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.DynamicGraph)(
  component
);
