import { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";

interface MonthlyData {
	eventTotal: number
	events: string[]
}

interface ChartData {
	monthArray: MonthlyData
	hoursInDay: string[]
}

const AllEvents = () => {
  const [eventsData, setEvents] = useState<ChartData>([]);
  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch("/api/getEventData.json");
      const eventsData = await res.json();

      eventsData.monthArray = eventsData.monthArray.filter((item: { eventTotal: number; }) => item.eventTotal !== 0 );

			setEvents(eventsData);
    };

    getEvents();
  }, []);
	
  return (
    <div>
			<h2>Time Chart</h2>
			<ChartComponent />
			{/* <HeatMapComponent /> */}
      {/* {eventsData.map(( item:MonthlyData ) => (
				<ul>
					<li>{item.eventTotal}</li>
				</ul>
			))} */}
    </div>
  );
};
export default AllEvents;
