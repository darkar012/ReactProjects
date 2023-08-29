import React from "react";
import ChartBart from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointValues);

  
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        
        <ChartBart
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        ></ChartBart>
      ))}
    </div>
  );
};

export default Chart;
