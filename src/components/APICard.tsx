import { useState } from "react";
import type EventData from "../types/event.type";

const APICard = () => {
	const [events, setEvents] = useState([]);
	const handleClick = async () =>{
		const res = await fetch("/api/events");
		const data = res.json();
		setEvents(await data)
	};
	return (
		<div>
			<p>Get More Items</p>
			{events.length > 0 && events.map((p:EventData) => <p>{p.src}</p>)}
			<button onClick={handleClick}>Get It</button>
		</div>
	)
}

export default APICard;
