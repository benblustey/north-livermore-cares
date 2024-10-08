import type { APIRoute } from "astro";
import type EventData from '../../types/event.type';

interface MonthlyData {
  date: string,
  count: number,
  events: string[]
}

export const GET: APIRoute = async (context) => {

  const res = await fetch("http://localhost:4321/api/events/");
  const dataEvents = await res.json();

  // Grab all the hours when events occured
  // This data is used for the bargraph
  const hoursInDay = Array(24).fill(0);
	const monthlyData: MonthlyData[] = [];

  // create object array for monthly data
  // const monthArray = Array.from({ length: 12 }, () => ({
  //   eventTotal: 0,
  //   events: [] as string[],
  // }));

  function search(dateKey: string, monthArray:MonthlyData[]){
    for (let i=0; i < monthArray.length; i++) {
      if (monthArray[i].date === dateKey) {
        return monthArray[i];
      }
    }
  }

  const array = [
      { name:"string 1", value:"this", other: "that" },
      { name:"string 2", value:"this", other: "that" }
  ];

  // const resultObject = search("string 1", array);
  // console.log(resultObject)


  dataEvents.forEach((event: EventData) => {
    const month = event.friendlyDate.slice(3, 5);
    const date = event.friendlyDate.slice(0,8);
		const time = event.friendlyDate.slice(10,18)
    const hour = event.friendlyDate.slice(10, 12);
    if (month && month[0]) {
      let returnedIndex = parseInt(hour);
      hoursInDay[returnedIndex] = (hoursInDay[returnedIndex] || 0) + 1;
  
      // const monthIndex = parseInt(month) - 1; // Adjust index for 0-based array
      // let monthltTotal = (monthArray[monthIndex].eventTotal || 0);
  
      // monthArray[monthIndex].eventTotal = monthltTotal + 1;
      // // Convert to primitive string to avoid the error
      // monthArray[monthIndex].events.push(event.friendlyDate.toString());
    }

    const fullDate: string = `20${date}`;
    const resultDay = search(fullDate, monthlyData);
		const formattedTime = time.replace(/-/g, ':');

    if (resultDay) {
      resultDay.count += 1;
      resultDay.events.push(time)
    } else {
			let newDayData : MonthlyData = {
				date: fullDate,
				count: 1,
				events: [formattedTime]
			}
			monthlyData.push(newDayData)
		}
  });

  const cleanEvent = {monthlyData,hoursInDay}

  return new Response(JSON.stringify(cleanEvent));
};

