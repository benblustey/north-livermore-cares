import { useEffect, useState } from "react";
import type EventData from "../types/event.type";

const AllEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch("/api/getEvents.json");
      const data = await res.json();
      setEvents(data);
    };

    getEvents();
  }, []);

  return (
    <div>
      {events.length > 0 &&
        events.map(( item:EventData ) => (
          <ul>
            <li>{item._id}</li>
            <li>{item.epoch}</li>
            <li>{item.src}</li>
            <li>{item.starred}</li>
            <li>{item.friendlyDate}</li>
            <li>{item.length}</li>
					</ul>
        ))}
    </div>
  );
};
export default AllEvents;
