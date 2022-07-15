import React from "react";
import ReactEcharts from "echarts-for-react"; 
import { useEffect ,useState } from 'react';

function Point(props){
  const [title, SetTitle] = useState('TotalDuration by D_MachID ');
  useEffect(() => {
    if(!(props.title==""||props.title==null))
        SetTitle(props.title)
}, [props.title]);
    const point = {
        title: {
          top: '10%',
          text: title,
          left: 'center'
        },
    xAxis: {
      type: 'time',
      scale: true
    },
    yAxis: {
      
      scale: true
    },
    grid: {
      top: '20%',
      height: '60%',
      widht: '70%',
      right: '24%'
    },
    legend: {
      icon: 'rect',
      left: '78%',
      right: '60%',
      top: '20%',
      orient: 'vertical',
      data: ['Machine 1', 'Machine 2', 'Machine 3'],
      formatter: (name) => {
        var value = point.series.filter((row) => row.name === name)[0].data;
        var avg = 0,
          min = 1000,
          max = 0;
        var total = 0;
        var arr = [];
        value.forEach((element) => {
          if (min > element[1]) {
            min = element[1];
          }
          if (max < element[1]) {
            max = element[1];
          }
          total += element[1];
          arr.push(element[1]);
        });
        avg = total / value.length;
        return (
          name +
          '   ' +
          parseFloat(min).toFixed(1) +
          ' s' +
          '   ' +
          parseFloat(max).toFixed(1) +
          ' s' +
          '   ' +
          parseFloat(avg).toFixed(1) +
          ' s'
        );
      }
    },
    series: props.dataList
  };


return <ReactEcharts theme={'dark'} option={point} />;

}
export default Point;