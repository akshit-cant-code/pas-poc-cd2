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
import Gauge from "./Gauge";
import Nav from "../Common/Content/Nav";
import Point from "./Point";
import HeatMap from "./HeatMap";
import Stacked from "./StackedBar";
import Discrete from "./Discrete";
import NavBar from "../QueryPage/NavBar";
import Form from "../QueryPage/Form";
import EmptyPage from "../QueryPage/EmptyPage";
import  DateRange  from "./DateRange";
import {  addDays} from 'date-fns'

class DynamicGraph extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedCardType: "",
      dataList:[],
    timeRange:  {
      "endDate" : addDays(new Date(), 1),
       "StartDate": new Date()
      }
    };

    this.onThemeChange = this.onThemeChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ ...event.target.value });
  };

  handleCallback = (childData) =>{      
    var Tag = Point;
    if("name" in childData){
       //Tag=childData.Graph
       var Query = childData.name.replace("$timeRange" ,'time > '+ this.state.timeRange.StartDate.toISOString()+' and time < '+ this.state.timeRange.endDate.toISOString() )
       var Temp = {Graph: this.state.selectedCardType.label, query : Query}
          fetch("https://localhost:7239/InfluxClient" ,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(Temp)
        }).then(data => {
            this.setState({dataList:data});
          });   
          this.renderSelectedCard(this.state.selectedCardType);        
    } 
    else {
        this.state.timeRange = childData;
    }
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
    timeRange:  {
      "endDate" : addDays(new Date(), 1),
       "StartDate": new Date()
      }
  };

  render() {
    const { session, t } = this.props;
    return (
      <Nav>
        <Container maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Typography variant="h4" sx={{ mb: 3 }}></Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}  sm={8} md={8} >
             <DateRange parentCallback = {this.handleCallback}></DateRange>
            </Grid>
            <Grid item xs={4}>
              {this.renderCardSelector()}
            </Grid>
            <Grid item xs={8}>
              <Card
                sx={{
                  minHeight: "250px",
                  width: "100%",
                  background: "rgb(24, 22, 22)",
                }}
              >
                {this.renderSelectedCard(this.state.selectedCardType)}
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Card>
               
                {<PanelTabs></PanelTabs>}
           
              </Card>         
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
            <NavBar></NavBar>
          <Card sx={{  background:"rgb(24, 22, 22)"}}>           
               {<Form parentCallback = {this.handleCallback}></Form> }
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
        sx={{ width: 300 }}
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
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img loading="lazy" width="30" height="20" src={option.path} />
            {option.label}
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
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-graphs",
                style: { paddingLeft: "30px", textAlign: "left" }, // disable autocomplete and autofill
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
    switch (gTypes) {
      case "Line":
        graphs = <Line dataList={this.state.dataList}></Line>;
        break;
      case "Bar":
        graphs = <Bar dataList={this.state.dataList}></Bar>;
        break;
      case "Gauge":
        graphs = <Gauge dataList={this.state.dataList} perData="26.5" risk={"#FF6E76"}></Gauge>;
        break;
      case "Point":
        graphs = <Point dataList={this.state.dataList}></Point>;
        break;
      case "HeatMap":
        graphs = <HeatMap dataList={this.state.dataList}></HeatMap>;
        break;
      default:
        <EmptyPage></EmptyPage>;
    }

    return graphs;
  }
}

export function PanelTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All" value="1" />
            <Tab label="Override" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AccordionMenu></AccordionMenu>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}

export function AccordionMenu() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Panel Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Tooltip</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Legend</Typography>
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
