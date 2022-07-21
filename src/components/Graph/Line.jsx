import React from "react";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";

function Line(props) {
  if (props == undefined || props.dataList[0] == undefined) return null;
  const [title, SetTitle] = useState(props.title);
  useEffect(() => {
    if (!(props.title == "" || props.title == null)) SetTitle(props.title);
  }, [props.title]);
  console.log(title);
  const line = {
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
        type: "time",
        data: props.dataList[0].time,
        boundaryGap: false,

        axisLine: {
          lineStyle: {
            type: "solid",
            width: 5,
            color: "green",
          },
          onZero: true,
        },
        axisLabel: {
          color: "white",
        },
        onZero: true,
      },
    ],
    yAxis: {
      min: 0,
      type: "value",
      axisLabel: {
        color: "white",
      },
    },
    series: [
      {
        type: "line",
        showSymbol: false,
        smooth: true,
        color: "yellow",
        width: 5,
        lineStyle: {
          width: 6,
        },

        data: props.dataList[0].data,
      },
    ],
  };

  return (
    <ReactEcharts
      option={line}
      style={{ height: "300px", width: props.lineWidth }}
    />
  );
}

export default Line;
