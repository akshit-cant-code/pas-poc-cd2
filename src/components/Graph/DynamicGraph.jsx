import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropTypes } from "prop-types";
import { withTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { sessionAction } from "../../redux/actions";
import { APP_CONSTANTS, I18N_CONSTANTS } from "../../constants";
import { Grid, Container, Typography, Menu } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Card } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Line from "../GraphTypes/Line/Line";
import Pie from "../GraphTypes/Pie/Pie";
import Bar from "./Bar";
import Gauge from "../GraphTypes/Gauge/Gauge";
import Nav from "../Common/Content/Nav";
import Point from "./Point";
import HeatMap from "./HeatMap";
import Stacked from "./StackedBar";
import Discrete from "./Discrete";
import NavBar from "../QueryPage/NavBar";
import Form from "../QueryPage/Form";
import EmptyPage from "../QueryPage/EmptyPage";
import DateRange from "./DateRange";
import { addDays } from "date-fns";
import MenuItem from "@mui/material/MenuItem";

class DynamicGraph extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedCardType: "",
      dataList:[],
      child: "",
      QueryStat : null,
    timeRange:  {
      "endDate" : addDays(new Date(), 1),
       "StartDate": new Date()
      },
      title : "",
    };

    this.onThemeChange = this.onThemeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ ...event.target.value });
  };

  handleCallback = (childData) => {
    var Tag = Point;
    if ("name" in childData) {
      //Tag=childData.Graph
      var Query = childData.name.replace(
        "$timeRange",
        "time > " +
          this.state.timeRange.StartDate.toISOString() +
          " and time < " +
          this.state.timeRange.endDate.toISOString()
      );
      var Temp = { Graph: this.state.selectedCardType.label, query: Query };
      fetch("https://localhost:7239/api/InfluxClient", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(Temp),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ dataList: data });
          console.log(data);
          console.log(data[0].data);
        });
      this.renderSelectedCard(this.state.selectedCardType);
    }
    else {
        this.setState({timeRange:childData})
  }
  }

  SetTitle= (childData) => {
    console.log(childData)
    this.setState({title:childData}); 
  }

  componentDidMount() {}

  onThemeChange(event) {
    const { actions } = this.props;
    const theme = event.target.checked
      ? APP_CONSTANTS.THEME.DARK
      : APP_CONSTANTS.THEME.DEFAULT;

    actions.currentTheme(theme);
  }

  state = {
    selectedCardType: "",
    dataList:[],
    title:"",
    timeRange:  {
      "endDate" : addDays(new Date(), 1),
       "StartDate": new Date()
      }
  };

  render() {
    const { session, t } = this.props;
    return (
      <Nav>
        <Container maxWidth="xl" style={{ backgroundColor: "black" }}>
          <Typography variant="h4" sx={{ mb: 3 }}></Typography>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              style={{
                paddingLeft: "37%",
              }}
            >
              <DateRange parentCallback={this.handleCallback}></DateRange>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              {this.renderCardSelector()}
            </Grid>
            <Grid item xs={8}>
              <Card
                sx={{
                  minHeight: "250px",
                  width: "100%",
                  background: "#181b1f",
                }}
              >
                {this.renderSelectedCard(this.state.selectedCardType)}
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Card>
               
                {<PanelTabs parentCallback = {this.SetTitle} title = {this.state.title}></PanelTabs>}
           
              </Card>         
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <NavBar></NavBar>
              <Card sx={{ background: "#181b1f" }}>
                {<Form parentCallback={this.handleCallback}></Form>}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Nav>
    );
  }

  renderCardSelector() {
    return (
      <Autocomplete
        sx={{
          width: 300,
          backgroundColor: "rgb(34, 37, 43)",
          color: "rgb(204, 204, 220)",
        }}
        options={graphsTypes}
        onChange={(event, newValue) => {
          this.setState({ selectedCardType: "" });

          if (newValue != undefined) {
            this.setState({ selectedCardType: newValue });
          }
        }}
        value={this.state.graphTypes}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              "& > img": { mr: 2, flexShrink: 0 },
              backgroundColor: "rgb(34, 37, 43)",
              color: "rgb(204, 204, 220)",
            }}
            {...props}
          >
            <img loading="lazy" width="30" height="20" src={option.path} />
            <MenuItem>{option.label}</MenuItem>
          </Box>
        )}
        renderInput={(params) => (
          <div style={{ position: "relative" }}>
            {params.inputProps.value && (
              <span
                style={{
                  position: "absolute",
                  transform: "translateY(50%)",
                }}
              >
                {
                  <img
                    loading="lazy"
                    width="30"
                    height="20"
                    sx={{ paddingLeft: 15 }}
                    src={this.state.selectedCardType.path}
                  />
                }
              </span>
            )}
            <TextField
              {...params}
              label="Select Graph Types"
              variant="outlined"
              color="secondary"
              focused
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-graphs",
                style: {
                  paddingLeft: "30px",
                  textAlign: "left",
                  color: "rgb(204, 204, 220)",
                }, // disable autocomplete and autofill
              }}
            />
          </div>
        )}
      />
    );
  }

  renderSelectedCard(selectedCardType) {
    const gTypes = selectedCardType.label;
    // const Card = GraphTypes[selectedCardType];
    var graphs = "";
    console.log("child value", this.state.child);
    switch (gTypes) {
      case "Line":
        let queryValue = this.state.child != "" ? this.state.dataList : [];
        graphs = <Line dataList={queryValue}  title={this.state.title}></Line>;
        break;
      case "Bar":
        graphs = <Bar dataList={this.state.dataList} title={this.state.title}></Bar>;
        break;
      case "Gauge":
        graphs = <Gauge dataList={this.state.dataList} perData="26.5" risk={"#FF6E76"} title={this.state.title}></Gauge>;
        break;
      case "Point":
        graphs = <Point dataList={this.state.dataList} title={this.state.title}></Point>;
        break;
      case "HeatMap":
        graphs = <HeatMap dataList={this.state.dataList} title={this.state.title}></HeatMap>;
        break;
      default:
        <EmptyPage></EmptyPage>;
    }

    return graphs;
  }
   

}

export function PanelTabs(props) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  return (
    <Box sx={{ background: "#181b1f" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              style={{ color: "rgba(204, 204, 220, 0.65)" }}
              label="All"
              value="1"
            />
            <Tab
              style={{ color: "rgba(204, 204, 220, 0.65)" }}
              label="Override"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
        <TextField
           InputLabelProps={{
             style: { color: '#3f51b5' },
             height:700,
             input: {
              color: "#3f51b5"
            }
          }}
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
            id="name-input"
            label="Title"
            onChange={(e)=>{props.parentCallback(e.target.value);}}
            type="text"
            value= {props.title}
            fullWidth          />
           <br></br>
           <br></br>
           <TextField      
           InputLabelProps={{
             style: { color: '#3f51b5' },
             height:900,
             input: {
              color: "#3f51b5"
            }
          }}
          inputProps={{ style: { fontFamily: "nunito", color: "white" , wordWrap: "break-word"} }}
            id="name-input"
            label="Description"
            type="text"
            fullWidth 
            multiline
            rows={3}
            maxRows={Infinity}
           /> 
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}

export function AccordionMenu() {
  return (
    <div>
      <Accordion sx={{ background: "#181b1f", margin: "5px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "white" }}>Panel Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#181b1f" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ color: "white" }}>Tooltip</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#181b1f" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ color: "white" }}>Legend</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

DynamicGraph.propTypes = {
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

const component = connect(mapStateToProps, mapDispatchToProps)(DynamicGraph);
export default withTranslation(I18N_CONSTANTS.NAMESPACE.DynamicGraph)(
  component
);
const graphsTypes = [
  { label: "Bar", path: "/assets/images/barchart.svg" },
  { label: "Line", path: "/assets/images/Line.svg" },
  { label: "Gauge", path: "/assets/images/Gauge.svg" },
  { label: "Point", path: "/assets/images/Line.png" },
  { label: "HeatMap", path: "/assets/images/HeatMap.svg" },
];
