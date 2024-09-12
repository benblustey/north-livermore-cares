import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export async function GET() {
	const articles = await instance.get('/api/articles/all');
	return new Response(JSON.stringify(articles.data), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		}
	)
}
