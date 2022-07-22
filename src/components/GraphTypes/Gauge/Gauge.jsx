import React from "react";

import ReactEcharts from "echarts-for-react";
import { useEffect ,useState } from 'react';


function Gauge(props) {
  const [title, SetTitle] = useState('Availability');
  useEffect(() => {
    if(!(props.title==""||props.title==null))
        SetTitle(props.title)
}, [props.title]);
  const option = {
    title: {
      top: 10,
      left: 'center',
      text: title
    },
    series: [
      {
        type: 'gauge',
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, '#FF6E76'],
              [0.6, '#FDDD60'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: 'white',
          fontSize: 15,
          distance: -60,
          formatter: function (value) {
            if (value === 0) {
              return '0';
            } else if (value === 30) {
              return '30';
            } else if (value === 70) {
              return '70';
            } else if (value === 100) {
              return '100';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 30,
        },
        detail: {
          fontSize: 15,
          color:"white",
          offsetCenter: [0, '-10%'],
          valueAnimation: true,
          // formatter: function (perData) {
           
          //   return Math.round(perData * 100) + '%';
          // }
          formatter:props.perData + "%"
        },
        data: [
          {
            value: 0.2,
            name: ''
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '70%'],
        radius: "90%",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        itemStyle: {
          color: props.risk
        },
        progress: {
          show: true,
          width: 20
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: props.perData
          }
        ]
      }
    ]
  };
  return <ReactEcharts option={option} />;
}
export default Gauge;