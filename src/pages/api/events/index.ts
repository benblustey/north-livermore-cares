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
