import React from "react";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
function Bar(props) {
  const [title, SetTitle] = useState("Rejects By Machine");
  useEffect(() => {
    if (!(props.title == "" || props.title == null)) SetTitle(props.title);
  }, [props.title]);
  const bar = {
    color: ["#3398DB", "#5528DB", "#ff00DB", "#3300DB", "#de3423"],
    title: {
      text: title,
      left: "center",
      textStyle: {
        color: "white",
        fontSize: "12",
      },
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          inside: false,
          color: "white",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
    ],
    legend: {
      data: ["M1", "M2", "M3", "M4", "M5", "M6"],
      orient: "vertical",
      right: "0%",
      top: "25%",
      textStyle: {
        color: "white",
        fontSize: "10px",
      },
    },
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "white",
        },
      },
    ],
    series: [
      {
        name: "M1",
        type: "bar",
        stack: "stack",
        data: [3000, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "M2",
        type: "bar",
        stack: "stack",
        data: [0, 2500, 0, 0, 0, 0, 0],
      },
      {
        name: "M3",
        type: "bar",
        stack: "stack",
        data: [0, 0, 2000, 0, 0, 0, 0],
      },
      {
        name: "M4",
        type: "bar",
        stack: "stack",
        data: [0, 0, 0, 1500, 0, 0, 0],
      },
      {
        name: "M5",
        type: "bar",
        stack: "stack",
        data: [0, 0, 0, 0, 1000, 0, 0],
      },
      {
        name: "M6",
        type: "bar",
        stack: "stack",
        data: [0, 0, 0, 0, 0, 500, 0],
      },
    ],
  };
  return (
    <ReactEcharts
      option={bar}
      style={{ height: "300px", width: props.barWidth }}
    />
  );
}
export default Bar;
