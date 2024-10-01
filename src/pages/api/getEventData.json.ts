import type { APIRoute } from "astro";
import type EventData from '../../types/event.type';

export const GET: APIRoute = async (context) => {

	const res = await fetch("http://localhost:4321/api/events/");
  const dataEvents = await res.json();

	// Grab all the hours when events occured
	// This data is used for the bargraph
	const hoursInDay = Array(24).fill(0);
	// create object array for monthly data
	const monthArray = Array.from({ length: 12 }, () => ({
		eventTotal: 0,
		events: [] as string[],
	}));
	dataEvents.forEach((event: EventData) => {
		const month = event.friendlyDate.slice(3, 5);
		const hour = event.friendlyDate.slice(10, 12);
		if (month && month[0]) {
			let returnedIndex = parseInt(hour);
			hoursInDay[returnedIndex] = (hoursInDay[returnedIndex] || 0) + 1;
	
			const monthIndex = parseInt(month) - 1; // Adjust index for 0-based array
			let monthltTotal = (monthArray[monthIndex].eventTotal || 0);
	
			monthArray[monthIndex].eventTotal = monthltTotal + 1;
			// Convert to primitive string to avoid the error
			monthArray[monthIndex].events.push(event.friendlyDate.toString());
		}
	});
	const cleanEvent = {monthArray,hoursInDay}

  return new Response(JSON.stringify(cleanEvent));
};

