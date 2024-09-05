import ApexCharts from 'apexcharts'

function generateData(){
  let arr = []
  for(let i=1; i<30; ++i){
    arr.push({x: i, y: Math.floor((Math.random() * 55))})
  }
  return arr
}

if (document.getElementById('events-by-hour')) {
	const options = {
		colors: ['#E03131'],

    series: [
      {
        name: "Events",
				color: '#E03131',
        data: [
          { x: '00:00', y: 29 },
          { x: '01:00', y: 14 },
          { x: '02:00', y: 2 },
          { x: '03:00', y: 5 },
          { x: '04:00', y: 0 },
          { x: '05:00', y: 0 },
          { x: '06:00', y: 1 },
          { x: '07:00', y: 0 },
          { x: '08:00', y: 1 },
          { x: '09:00', y: 1 },
          { x: '10:00', y: 1 },
          { x: '11:00', y: 0 },
          { x: '12:00', y: 2 },
          { x: '13:00', y: 1 },
          { x: '14:00', y: 2 },
          { x: '15:00', y: 1 },
          { x: '16:00', y: 0 },
          { x: '17:00', y: 0 },
          { x: '18:00', y: 2 },
          { x: '19:00', y: 1 },
          { x: '20:00', y: 10 },
          { x: '21:00', y: 50 },
          { x: '22:00', y: 43 },
          { x: '23:00', y: 28 }
        ]
      }
    ],
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
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        var label = w.globals.initialSeries[seriesIndex];
        var data = label.data[dataPointIndex];
        var value = series[seriesIndex][dataPointIndex];
        return (
          `<div class="arrow_box"><span class="tooltip-title">Time: ${data.x}</span>
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
		xaxis: {
			floating: false,
			labels: {
				show: true,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: true,
		},
		fill: {
			opacity: 1,
		},
	};

	const chart = new ApexCharts(
		document.getElementById('events-by-hour'),
		options,
	);
	chart.render();
}

if (document.getElementById('events-by-date')) {
  var options = {
    series: [
      {
        name: 'September',
        data: generateData() 
      },
      {
        name: 'August',
        data: generateData() 
      },
      {
        name: 'July',
        data: generateData() 
      },
      {
        name: 'June',
        data: [
          {
            "x": 1,
            "y": -1
          },
          {
            "x": 2,
            "y": -1
          },
          {
            "x": 3,
            "y": -1
          },
          {
            "x": 4,
            "y": -1
          },
          {
            "x": 5,
            "y": -1
          },
          {
            "x": 6,
            "y": -1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 44
          },
          {
            "x": 9,
            "y": 44
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 11,
            "y": 19
          },
          {
            "x": 12,
            "y": 14
          },
          {
            "x": 13,
            "y": 48
          },
          {
            "x": 14,
            "y": 15
          },
          {
            "x": 15,
            "y": 33
          },
          {
            "x": 16,
            "y": 43
          },
          {
            "x": 17,
            "y": 12
          },
          {
            "x": 18,
            "y": 29
          },
          {
            "x": 19,
            "y": 39
          },
          {
            "x": 20,
            "y": 12
          },
          {
            "x": 21,
            "y": 45
          },
          {
            "x": 22,
            "y": 24
          },
          {
            "x": 23,
            "y": 11
          },
          {
            "x": 24,
            "y": 4
          },
          {
            "x": 25,
            "y": 10
          },
          {
            "x": 26,
            "y": 49
          },
          {
            "x": 27,
            "y": 37
          },
          {
            "x": 28,
            "y": 37
          },
          {
            "x": 29,
            "y": 2
          }
        ]
      }      
    ],
    chart: {
      animations: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      formatter: function(value:number, { }) {
        let label = value < 0 ? "" : value;
        return label;
      }
    },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        var label = w.globals.initialSeries[seriesIndex];
        var shortLabel = label.name.substring(0,3)
        var data = label.data[dataPointIndex];
        var value = series[seriesIndex][dataPointIndex] >= 0 ? series[seriesIndex][dataPointIndex] : "n/r"
        return `<div class="arrow_box"><span class="tooltip-title">${shortLabel} ${data.x}:</span></br><span class="tooltip-value">${value} events</div>`
      }
    },
    colors: ["#E03131"],
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.2,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: -1,
              to: -1,
              name: "Not Recorded",
              color: "#000000",
              foreColor: "#0a0a0a"
            },
            {
              from: 0,
              to: 0,
              name: "none",
              color: "#FFFFFF",
              foreColor: "#868e96"
            },
            {
              from: 1,
              to: 10,
              name: "medium",
              color: "#ffc9c9"
            },
            {
              from: 11,
              to: 20,
              name: "high",
              color: "#ff8787",
            },
            {
              from: 21,
              to: 100,
              name: "extreme",
              color: "#c92a2a"
            }
          ]
        }
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#FFFFFF'
        }
      },
      tooltip: {
        enabled: false,
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF'
        }
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#events-by-date"), options);
  chart.render();
}
