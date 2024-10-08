import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip'
import 'react-calendar-heatmap/dist/styles.css';

function HeatMap() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("/api/getEventData.json")
    .then( res => res.json())
    .then( eventsData => {
      const monthlyData = eventsData.monthlyData;
      setChartData({
        heatmapData: monthlyData
      })
      
  })
  }, []);
  interface HeatmapValue {
    date: string;
    count: number;
  }	

  return (
    <div>
      {chartData && chartData?.heatmapData &&(
        <>
          <CalendarHeatmap
            startDate={new Date('2024-06-20')}
            endDate={new Date()}
            values={chartData.heatmapData}
            // values={heatmapData}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty'; // Return a default class if no value
              }
              return `color-scale-${Math.min(value.count, 20)}`;
            } }
            tooltipDataAttrs={(value) => {
              return {
                'data-tip': value ? `${value.date}: ${value.count} events` : 'No data',
              };
            }}
            onClick={value => alert(`Clicked on value with count: ${value.count}`)}
            showWeekdayLabels={true} />
          <ReactTooltip />
        </>
      )}
    </div>
  );
}

export default HeatMap;
