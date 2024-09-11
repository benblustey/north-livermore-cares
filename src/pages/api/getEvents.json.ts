// import type { APIRoute } from "astro";


// // replace this with express API
// export const GET: APIRoute = async () => {
// 	const response = await fetch('/public/event-data.json')
// 	return response;
// };

// Outputs: /builtwith.json
export async function GET() {
	try {
		return new Response(
			JSON.stringify({
				name: 'Events',
				url: 'http://localhost:8080/',
				headers: {
					'content': 'application/json'
				}
			})
		)
	} catch {

	}
}
