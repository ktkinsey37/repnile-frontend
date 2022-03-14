import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(
    function getEventOnLoad() {
      async function getEvent() {
        let event = await RepnileApi.getEvent(id);
        console.log(event, "this is animal in  getanimalonload");
        setEvent(event.event);
        setIsLoading(false);
      }
      getEvent();
    },
    [id]
  );

//   const forSale = animal.forSale
//     ? "This critter is for sale!"
//     : "This critter is currently unavailable";

  if (isLoading) {
    return <p>Loading... &hellip;</p>;
  }
console.log(event)

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {event.title}
            <br/>
            <br/>
            {event.date}
            <br/>
            <br/>
            {event.description}
            <br />
            <br />
          </CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Event;
