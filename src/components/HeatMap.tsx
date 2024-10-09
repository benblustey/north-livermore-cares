import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip'
import 'react-calendar-heatmap/dist/styles.css';

interface HeatmapValue {
	date: string;
	count: number;
	events: string[];
	formattedDate: string;
}
interface ChartData {
	heatmapData: HeatmapValue[]
}

function HeatMap() {
  const [chartData, setChartData] = useState<ChartData>({
		heatmapData: []
	});

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

  return (
    <div id="monthly-heatmap">
      {chartData && chartData?.heatmapData && (
				<>
					<CalendarHeatmap
						startDate={new Date('2024-06-20')}
						endDate={new Date()}
						values={chartData.heatmapData}
						classForValue={(value) => {
							if (!value) {
								return 'color-empty'; // Return a default class if no value
							}
							let colorValue = value.count <= 5 ? value.count : Math.ceil(Math.min(value.count, 25) / 5) * 5;
							return `color-scale-${colorValue}`;
						}}
						tooltipDataAttrs={(value: { count: any; formattedDate: any; }) => {
							return {
								'data-tip': value.count ? `<span class="tooltip-title">${value.formattedDate}:</span><span>${value.count} events</span>` : 'No data',
							};
						}}
						// Todo: pass the value.date to fetch data for only that date
						// onClick={value => alert(`Clicked on value with count: ${value.date}`)}
						showWeekdayLabels={true} />
					<ReactTooltip multiline={true} html={true} className="heatmap-tool-tip"/>
				</>
      )}
    </div>
  );
}

export default HeatMap;
