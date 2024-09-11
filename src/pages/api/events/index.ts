import type { APIRoute } from "astro";
import { instance } from "../axisconfig";

export async function GET() {
	const allEvents = await instance.get('/api/event/all');
	return new Response(JSON.stringify(allEvents.data), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
}

export const POST: APIRoute = async ({request}) => {
	const event = await request.json();
	const createEvent = await instance.post('/api/event/add', event);
	return new Response(JSON.stringify(createEvent.data), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}

