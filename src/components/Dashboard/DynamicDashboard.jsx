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
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";
import { sessionAction } from "../../redux/actions";
import { APP_CONSTANTS, I18N_CONSTANTS } from "../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import GridLayout from "react-grid-layout";
import "./ReactGrid.css";

var lineChart = [
  {
    time: [
      "2022-06-29T06:04:17Z",
      "2022-06-29T06:04:27Z",
      "2022-06-29T06:04:37Z",
      "2022-06-29T06:04:47Z",
      "2022-06-29T06:04:57Z",
      "2022-06-29T06:05:07Z",
      "2022-06-29T06:05:17Z",
      "2022-06-29T06:05:27Z",
      "2022-06-29T06:05:37Z",
      "2022-06-29T06:05:47Z",
    ],
    data: [
      35.430646915068834, 155.47021040777319, 155.51222518750644,
      295.47587823787097, 295.434295555617794, 395.427018225305936,
      550.42988367406285, 550.412719856153885, 850.39156010364627,
      850.41648293131611, 250.43701384186763, 250.416667779163659,
    ],
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
  { i: "a", x: 0, y: 0, w: 3, h: 4 },
  { i: "b", x: 3, y: 0, w: 3, h: 4 },
  { i: "c", x: 6, y: 0, w: 3, h: 4 },
  { i: "d", x: 9, y: 0, w: 3, h: 4 },
  { i: "e", x: 0, y: 5, w: 7, h: 8 },
  { i: "f", x: 7, y: 5, w: 5, h: 8 },
  { i: "g", x: 0, y: 13, w: 7, h: 8 },
  { i: "h", x: 7, y: 13, w: 5, h: 8 },
];

const DynamicDashboard = (props) => {
  const [widths, setWidth] = useState(0);
  const [gauge, setGauge] = useState(0);
  const [discrete, setDiscrete] = useState(0);
  const [pie, setPie] = useState(0);
  const [line, setLine] = useState(0);
  const [pies, setPies] = useState(0);
  const [grid, setGrid] = useState();
  const elementRef = useRef(null);

  useEffect(() => {
    const widthh = document.querySelector(".layoutDiv").offsetWidth;
    const gauge1 = document.querySelector(".gauge1").offsetWidth;
    const discretes = document.querySelector(".discrete").offsetWidth;
    const piee = document.querySelector(".pie").offsetWidth;
    const lines = document.querySelector(".lines").offsetWidth;
    const piess = document.querySelector(".pies").offsetWidth;
    setWidth(widthh);
    setGauge(gauge1);
    setDiscrete(discretes);
    setPie(piee);
    setLine(lines);
    setPies(piess);
  }, [grid]);
  console.log("div width", widths);

  const handleLayoutChange = (layout) => {
    //const lay = JSON.stringify(layout);
    setGrid(layout);
  };

  const { session, t } = props;
  console.log({ session, t });

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="h4" sx={{ mb: 3 }}></Typography>

        <Grid container spacing={1}>
          <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            onLayoutChange={handleLayoutChange}
          >
            <Grid key="a">
              {/* { <AppWidgetSummary title="Output Rate" total={"1,179 cph"}   /> } */}

              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center", paddingBottom: 5 }}
                  color="white"
                >
                  Output Rate
                </Typography>

                <Typography
                  sx={{ fontSize: 14, textAlign: "center", fontSize: 30 }}
                  color="white"
                >
                  1,179 <span style={{ fontSize: "initial" }}>cph</span>
                </Typography>
              </Card>
            </Grid>

            <Grid key="b">
              {/* {<AppWidgetSummary title="Total Cards" total={"891,625"} color="info" /> } */}
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 12, textAlign: "center", paddingBottom: 5 }}
                  color="white"
                >
                  Total Cards
                </Typography>

                <Typography
                  sx={{ fontSize: 14, textAlign: "center", fontSize: 30 }}
                  color="white"
                >
                  891,625
                </Typography>
              </Card>
            </Grid>

            <Grid key="c" className="gauge1">
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center" }}
                  color="white"
                >
                  Availability
                </Typography>

                {
                  <Gauge
                    perData="26.5"
                    risk={"#FF6E76"}
                    gaugeWidth={gauge}
                  ></Gauge>
                }
              </Card>
            </Grid>

            <Grid key="d" className="layoutDiv">
              <Card
                ref={elementRef}
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center" }}
                  color="white"
                >
                  Performance
                </Typography>
                <Gauge
                  perData="57"
                  risk={"#FDDD60"}
                  gaugeWidth={widths}
                ></Gauge>
              </Card>
            </Grid>

            <Grid item key="e" className="discrete">
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {<Discrete discreteWidth={discrete}></Discrete>}
              </Card>
            </Grid>

            <Grid item key="f" className="pie">
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {
                  <Pie
                    title={"Cards by Card Setup"}
                    dataItem={dataListCardSetup}
                    pieWidth={pie}
                  ></Pie>
                }
              </Card>
            </Grid>

            <Grid item key="g" className="lines">
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {<Line lineWidth={line} dataList={lineChart}></Line>}
              </Card>
            </Grid>

            <Grid item key="h" className="pies">
              <Card
                sx={{
                  height: "inherit",
                  width: "inherit",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {
                  <Pie
                    title="Cards by Job Setup"
                    dataItem={dataListJobSetup}
                    pieWidth={pies}
                  ></Pie>
                }
              </Card>
            </Grid>
          </GridLayout>
        </Grid>
      </Container>
    </Page>
  );
};

DynamicDashboard.propTypes = {
  session: PropTypes.shape({
    currentTheme: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    currentTheme: PropTypes.func.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

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

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicDashboard);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.DynamicDashboard)(
  component
);
