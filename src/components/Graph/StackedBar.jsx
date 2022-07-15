import React from "react";
import ReactEcharts from "echarts-for-react";

var genFormatter = (series) => {
  return (param) => {
    let sum = 0;
    series.forEach((item) => {
      sum += item.data[param.dataIndex];
    });
    return sum;
  };
};
var series = [
  {
    // barMaxWidth: "30",
    name: "M1",
    data: [100, 115, 165, 107, 67],
  },
  {
    name: "M2",
    data: [85, 106, 129, 161, 123],
  },
  {
    name: "M3",
    data: [67, 87, 86, 167, 157],
  },
];
function StackedBar({ stackWidth }) {
  const stackedBar = {
    legend: {
      orient: "vertical",
      right: "0%",
      top: "center",
      formatter: "45",
      textStyle: {
        color: "white",
      },
    },
    title: {
      text: "Hourly Output- Chip Operation By D_MachineID",
      left: "center",
      textStyle: {
        color: "white",
        fontSize: "12",
      },
    },
    xAxis: {
      data: ["D1", "D2", "D3", "D4"],
      axisLabel: {
        color: "white",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    series: series.map((item, index) =>
      Object.assign(item, {
        type: "bar",
        stack: true,
        label: {
          show: (index = false),
          formatter: genFormatter(series),
          fontSize: 15,
          color: "black",
          position: "left",
        },
      })
    ),
  };

  return (
    <ReactEcharts
      option={stackedBar}
      style={{ height: "300px", width: stackWidth }}
    />
  );
}
export default StackedBar;
