import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

function ChartComponent() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("/api/getEventData.json")
    .then( res => res.json())
    .then( eventsData => {
      const hourlyData = eventsData.hoursInDay;
      setChartData({
        options: {
          colors: ['#E03131'],
          chart: {
            type: 'bar',
            height: '400px',
            fontFamily: 'Inter, sans-serif',
            foreColor: '#4B5563',
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: '90%',
              borderRadius: 3,
            },
          },
          tooltip: {
            custom: function({series, seriesIndex, dataPointIndex, w}:{[key:string]:any}) {
							var label = w.globals.labels[dataPointIndex];
              var value = series[seriesIndex][dataPointIndex];
              return (
                `<div class="arrow_box"><span class="tooltip-title">Time: ${label}</span>
                </br><span class="tooltip-value">${value} events</div>`
              )
            }
          },
          states: {
            hover: {
              filter: {
                type: 'darken',
                value: 1,
              },
            },
          },
          stroke: {
            show: true,
            width: 5,
            colors: ['transparent'],
          },
          grid: {
            show: false,
          },
          dataLabels: {
            enabled: true,
          },
          legend: {
            show: false,
          },
          yaxis: {
            show: true,
          },
          fill: {
            opacity: 1,
          },
          xaxis: {
            categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            floating: false,
            labels: {
              show: true,
              rotate: -90,
              // rotateAlways: true,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
        },
        series: [
          {
            name: 'Hourly',
            data: hourlyData
          }
        ]
      })
      
  })
  }, []);
  

  return (
    <div>
      {chartData && chartData?.series &&(
        <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar" />
      )}
    </div>
  );
}

export default ChartComponent;
