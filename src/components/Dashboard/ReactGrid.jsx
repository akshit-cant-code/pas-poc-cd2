import React, { useState, useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
//import "./Graph.css"
import Gauge from "../Graph/Gauge";
import Discrete from "../Graph/Discrete";
import Pie from "../Graph/Pie";
import Point from "../Graph/Point";
import Line from "../Graph/Line";
import SingleStat from "../Graph/SingleStat";
import GridLayout from "react-grid-layout";
import "./ReactGrid.css";
// import Content from "./../../Layouts/Content/index";
// import Nav from "../../Layouts/Content/Nav";

const layout = [
  { i: "a", x: 0, y: 0, w: 3, h: 5 },
  { i: "b", x: 3, y: 0, w: 3, h: 5 },
  { i: "c", x: 6, y: 0, w: 3, h: 5 },
  { i: "d", x: 9, y: 0, w: 3, h: 5 },
  { i: "e", x: 0, y: 5, w: 7, h: 8 },
  { i: "f", x: 7, y: 5, w: 5, h: 8 },
  { i: "g", x: 0, y: 13, w: 7, h: 8 },
  { i: "h", x: 7, y: 13, w: 5, h: 8 },
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

const ReactGrid = (props) => {
  const [grid, setGrid] = useState(false);
  const [val, setVal] = useState();

  useEffect(() => {
    val && localStorage.setItem("grid-layout", JSON.stringify(grid));
    setVal(false);
  }, [val]);

  const handleCallback = (childData) => {
    setVal(childData);
  };

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");

    return savedLayouts ? JSON.parse(savedLayouts) : layout;
  };

  const handleLayoutChange = (layout) => {
    //const lay = JSON.stringify(layout);
    setGrid(layout);
  };

  return (
    <>
      {/* <Nav  parentCallback = {handleCallback}> */}
      <GridLayout
        className="layout"
        layout={getLayouts()}
        cols={12}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
      >
        <div key="a">
          <SingleStat value="1,798"></SingleStat>
        </div>
        <div key="b">
          <SingleStat value="2,561"></SingleStat>
        </div>
        <div key="c">
          <Gauge perData="57" risk={"#FDDD60"}></Gauge>
        </div>
        <div key="d">
          <Gauge perData="26.5" risk={"#FF6E76"}></Gauge>
        </div>
        <div key="e">
          <Discrete></Discrete>
        </div>
        <div key="f">
          <Pie title={"Cards by Card Setup"} dataItem={dataListCardSetup}></Pie>
        </div>
        <div key="g">
          <Line></Line>
        </div>
        <div key="h">
          <Pie title="Cards by Job Setup" dataItem={dataListJobSetup}></Pie>
        </div>
      </GridLayout>

      {/* </Nav>   */}
    </>
  );
};

export default ReactGrid;
