import React from 'react';
import ReactEcharts from 'echarts-for-react';


function Line(props){
  if (props == undefined || props.dataList[0] == undefined)
  return null
    const line = {
        title: {
          text: 'Production Progress -All',
          left: 'center',
          textStyle: {
            color: 'white',
            fontSize:"12"
            }
        },
        xAxis: [{
         type: "time",
          data: props.dataList[0].time,
          boundaryGap: false,
    
          axisLine: {
            lineStyle: {
              type: "solid",
              width: 5,
              color: 'green'
            },
            onZero: true
          },
          axisLabel: {
            color: "white"
          },
          onZero: true
        }],
        yAxis: {
          min: 0,
          type: 'value',
          axisLabel:{
            color:"white"
          }
        },
        series: [
    
          {
            type: 'line',
            showSymbol: false,
            smooth: true,
            color: "yellow",
            width: 5,
            lineStyle:{

              width:6

            },
          
            data: props.dataList[0].data,
    
          }
        ]
    
      };
    
    return <ReactEcharts  option={line}/>
}

export default Line;