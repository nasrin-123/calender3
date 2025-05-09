import React, { useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import eventsData from "../events.json";

export default function LoadEvents() {
  const { dispatchCalEvent } = useContext(GlobalContext);

  useEffect(() => {
    eventsData.forEach((event) => {
      const calendarEvent = {
        title: event.title,
        description: event.description,
        label: event.color,
        day: new Date(event.day).valueOf(),
        startTime: event.startTime,
        endTime: event.endTime,
        id: event.id || Date.now() + Math.random(), // Use event.id if exists
      };
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    });
  }, [dispatchCalEvent]); // Runs once when component mounts

  return null; // No UI
}
