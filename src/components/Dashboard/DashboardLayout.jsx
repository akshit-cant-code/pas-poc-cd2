import React, { Component } from "react";
import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "./AppWidgetSummary";
import Page from "./Page";
import { Card } from "@mui/material";
import Gauge from "../Graph/Gauge";
import Discrete from "../Graph/Discrete";
import Pie from "../Graph/Pie";
import Point from "../Graph/Point";
import Line from "../Graph/Line";
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";
import { sessionAction } from "../../redux/actions";
import { APP_CONSTANTS, I18N_CONSTANTS } from "../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";

var pointChart = [
  {
    name: "Machine 1",
    type: "scatter",
    symbolSize: 5,
    data: [
      ["2022-06-29T06:04:17Z", 0.5212745327966313],
      ["2022-06-29T06:04:27Z", 0.5068959500278387],
      ["2022-06-29T06:04:37Z", 0.5143273744178896],
      ["2022-06-29T06:04:47Z", 0.5225230186614753],
    ],
  },
  {
    name: "Machine 2",
    type: "scatter",
    symbolSize: 5,
    data: [
      ["2022-06-29T06:04:17Z", 0.5212745327966313],
      ["2022-06-29T06:04:27Z", 0.5068959500278387],
      ["2022-06-29T06:04:37Z", 0.5143273744178896],
      ["2022-06-29T06:04:47Z", 0.5225230186614753],
    ],
  },
  {
    name: "Machine 3",
    type: "scatter",
    symbolSize: 5,
    data: [
      ["2022-06-29T06:04:17Z", 0.5212745327966313],
      ["2022-06-29T06:04:27Z", 0.5068959500278387],
      ["2022-06-29T06:04:37Z", 0.5143273744178896],
      ["2022-06-29T06:04:47Z", 0.5225230186614753],
    ],
  },
];
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

class DashboardLayout extends Component {
  // classes = useStyles();

  constructor(props, context) {
    super(props, context);
    console.log(props);

    this.onThemeChange = this.onThemeChange.bind(this);
  }

  componentDidMount() {}

  onThemeChange(event) {
    const { actions } = this.props;

    const theme = event.target.checked
      ? APP_CONSTANTS.THEME.DARK
      : APP_CONSTANTS.THEME.DEFAULT;
    actions.currentTheme(theme);
  }

  render() {
    const { session, t } = this.props;
    console.log({ session, t });
    return (
      <Page title="Dashboard">
        <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Typography variant="h4" sx={{ mb: 3 }}></Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={2.4}>
              {/* { <AppWidgetSummary title="Output Rate" total={"1,179 cph"}   /> } */}

              <Card
                sx={{
                  height: 135,
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

            <Grid item xs={12} sm={6} md={2.4}>
              {/* {<AppWidgetSummary title="Total Cards" total={"891,625"} color="info" /> } */}
              <Card
                sx={{
                  height: 135,
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

            <Grid item xs={12} sm={6} md={2.4} background="">
              <Card
                sx={{
                  height: 135,
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center" }}
                  color="white"
                >
                  Availability
                </Typography>

                {<Gauge perData="26.5" risk={"#FF6E76"}></Gauge>}
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={2.4}>
              <Card
                sx={{
                  height: 135,
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center" }}
                  color="white"
                >
                  Performance
                </Typography>
                {<Gauge perData="57" risk={"#FDDD60"}></Gauge>}
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={2.4}>
              <Card
                sx={{
                  height: 135,
                  background: "rgb(24, 22, 22)",
                }}
              >
                <Typography
                  sx={{ fontSize: 14, textAlign: "center" }}
                  color="white"
                >
                  Quality
                </Typography>
                {<Gauge perData="98.8" risk={"#7CFFB2"}></Gauge>}
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={7}>
              <Card sx={{ background: "rgb(24, 22, 22)" }}>
                {<Discrete></Discrete>}
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <Card sx={{ background: "rgb(24, 22, 22)" }}>
                {
                  <Pie
                    title={"Cards by Card Setup"}
                    dataItem={dataListCardSetup}
                  ></Pie>
                }
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={7}>
              <Card
                sx={{
                  height: "100%",
                  width: "100%",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {
                  <Line
                    dataList={lineChart}
                    title="Production Progress -All"
                  ></Line>
                }
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <Card sx={{ height: "100%", background: "rgb(24, 22, 22)" }}>
                {
                  <Pie
                    title="Cards by Job Setup"
                    dataItem={dataListJobSetup}
                  ></Pie>
                }
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              {" "}
            </Grid>
          </Grid>
        </Container>
      </Page>
    );
  }
}

DashboardLayout.propTypes = {
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

const component = connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.DashboardLayout)(
  component
);
