import React from "react";
import ReactEcharts from "echarts-for-react";

function Pie({ title, dataItem, pieWidth }) {
  console.log(dataItem);
  console.log(title);
  const option = {
    title: {
      text: title,
      subtext: "",
      left: "center",
      textStyle: {
        fontSize: 12,
        color: "white",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      right: "right",
      type: "scroll",
      textStyle: {
        color: "white",
        fontSize: "10px",
      },
      formatter: (name) => {
        var value = dataItem.filter((row) => row.name === name)[0].value;
        return name + "    " + value;
      },
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "50%",
        data: dataItem,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{ height: "300px", width: pieWidth }}
    />
  );
}
export default Pie;
