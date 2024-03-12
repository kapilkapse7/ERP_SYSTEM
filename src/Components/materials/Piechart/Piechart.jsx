import React from "react";
import "./Piechart.css"

const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };
  
  const Circle = ({ colour, percentage }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;
    return (
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="transparent"
        stroke={strokePct !== circ ? colour : ""}
        strokeWidth={"2rem"}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    );
  };
  
  const Text = ({ percentage }) => {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
      >
        {percentage.toFixed(0)}%
      </text>
    );
  };



  const calculateTotalPercentage = (products) => {
    let totalPercentage = 0;
    for (const product of products) {
      totalPercentage += product.percentage; 
    }
    return totalPercentage;
  };
  
  const Piechart = ({ percentage, colour }) => {
    const pct = cleanPercentage(percentage);
    return (<div>
      <svg width={200} height={200} className="chart-container">
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle colour="lightgrey" />
          <Circle colour={colour} percentage={pct} />
        </g>
        <Text percentage={pct} />
  
      </svg>
      <p className="txt">Total stocks</p>
      </div>
    );
  };
  
  

  export default Piechart