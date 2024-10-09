import type { APIRoute } from "astro";
import type EventData from '../../types/event.type';

interface MonthlyData {
  date: string,
	formattedDate: string,
  count: number,
  events: string[]
}

export const GET: APIRoute = async (context) => {
	
  const res = await fetch("http://localhost:4321/api/events/");
  const dataEvents = await res.json();

  // Init array for events by hour of the day
  const hoursInDay = Array(24).fill(0);
	const monthlyData: MonthlyData[] = [];

  function search(dateKey: string, monthArray:MonthlyData[]){
    for (let i=0; i < monthArray.length; i++) {
      if (monthArray[i].date === dateKey) {
        return monthArray[i];
      }
    }
  }

  dataEvents.forEach((event: EventData) => {
    const month = event.friendlyDate.slice(3, 5);
    const date = event.friendlyDate.slice(0, 8);
		const time = event.friendlyDate.slice(10,18)
    const hour = event.friendlyDate.slice(10, 12);

		// events by hour of the day obj
    if (month && month[0]) {
      let returnedIndex = parseInt(hour);
      hoursInDay[returnedIndex] = (hoursInDay[returnedIndex] || 0) + 1;
    }

    const fullDate: string = `20${date}`;
    const resultDay = search(fullDate, monthlyData);
		const formattedTime = time.replace(/-/g, ':');
		
		const dateObj = new Date(fullDate);
		// Use toLocaleString with options for weekday, month, and day
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short',
			month: 'short',
			day: '2-digit'
		};
		const formattedDate = dateObj.toLocaleString('en-US', options);

    if (resultDay) {
      resultDay.count += 1;
      resultDay.events.push(time)
    } else {
			let newDayData : MonthlyData = {
				date: fullDate,
				formattedDate: formattedDate,
				count: 1,
				events: [formattedTime]
			}
			monthlyData.push(newDayData)
		}
  });

  const cleanEvent = {monthlyData,hoursInDay}

  return new Response(JSON.stringify(cleanEvent));
};

