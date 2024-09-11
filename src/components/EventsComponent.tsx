
const data = await fetch('http://localhost:8080/api/event/all').then((response) =>
  response.json()
);

// Components that are build-time rendered also log to the CLI.
// When rendered with a client:* directive, they also log to the browser console.
console.log(data);

const Events = () => {
// Output the result to the page
  return (
		data.map((event:any) => 
			<ul>
				<li>{event.src}</li>
				<li>{event.epoch}</li>
				<li>{event.date}</li>
				<li>{event.friendlyDate}</li>
				<li>{event.length}</li>
				<li>{event.starred}</li>
				</ul>
		)
	)
};

export default Events;
