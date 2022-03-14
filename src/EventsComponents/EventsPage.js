import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import RepnileApi from "../api"
import EventCard from "./EventCard";


function EventsPage({ }) {

    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);

    useEffect(() => {
      async function getEvents() {
        let events = await RepnileApi.getEvents();
        setEvents(events)
        setIsLoading(false);
      }
      getEvents()
    }, []);

    console.log(events)
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

  return (
    <div className="col-md-12 offset-md-4">
    <br/>
    <section className="col-md-10">
      <Card style={{ width: '30rem' }}>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>Events</h2>
          </CardTitle>  
          <Card>
            {events.map(event => (
              <Link to={`/events/${event.id}`}>
                <EventCard event={event}/>
              </Link>
            ))}
          </Card>

        </CardBody>
      </Card>
    </section>
    </div>
  );
}

export default EventsPage;
