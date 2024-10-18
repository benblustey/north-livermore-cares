import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const res = await fetch("http://localhost:4321/api/events/");
  const data = await res.json();
  return new Response(JSON.stringify(data));
};
