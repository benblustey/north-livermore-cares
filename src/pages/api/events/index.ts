import type { APIRoute } from "astro";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 100000,
  // headers: {'X-Custom-Header': 'foobar'}
});

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

// export const POST: APIRoute = ({ request }) => {
//   return new Response(JSON.stringify({
//       message: "This was a POST!"
//     })
//   )
// }
