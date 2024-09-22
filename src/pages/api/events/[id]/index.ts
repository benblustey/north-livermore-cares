export const prerender = false;
import type { APIRoute } from "astro";
import { instance } from "../../axisconfig";

export const PUT: APIRoute = async ({params, request}) => {
	const id = params.id;
	if(!id) {
		return new Response(JSON.stringify({err: 'id is required'}), {
			status: 200
		})
	}

	const event = await request.json();
	const updatedEvent = await instance.put(`/api/event/update/${id}`, event);

	return new Response(JSON.stringify(updatedEvent.data), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}

export const GET: APIRoute = async ({params, request}) => {
	const id = params.id;
	if(!id) {
		return new Response(JSON.stringify({err: 'id is required'}), {
			status: 200
		})
	}
	const singleEvents = await instance.get(`/api/event/${id}`);

	return new Response(JSON.stringify(singleEvents.data), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}

export const DELETE: APIRoute = async ({params, request}) => {
	const id = params.id;
	if(!id) {
		return new Response(JSON.stringify({err: 'id is required'}), {
			status: 200
		})
	}

	const deleteEvent = await instance.delete(`/api/event/delete/${id}`);
	return new Response(JSON.stringify(deleteEvent.data), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	})
}

