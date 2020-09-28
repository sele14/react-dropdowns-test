import { ResponsiveBar } from '@nivo/bar'
import { csv } from 'd3';
import { VictoryBar, VictoryChart } from 'victory';

import React, { useState, useEffect, useRef } from 'react';

  
function BarChart() {

    const row = d => {
    d.population = +d.population;
    return d;
    };

    // using hooks for loading csv file
    const [data, setData] = useState([]);
    
    useEffect(() => {
      csv('data.csv', row).then(setData);
      console.log(data);
    }, []);
    
    return (
      <VictoryChart
        style={
            {tickLabels: {fontSize: 120}},
            { data: { fill: "#c43a31" } }
        
        }
        width='960'
        height='500'
        domainPadding={50}
        padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
      >
        <VictoryBar data={data} x="country" y="population" />
      </VictoryChart>
    );
};
  
export default BarChart;