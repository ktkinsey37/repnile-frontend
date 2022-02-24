import React, { useEffect, useState, useContext } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RepnileApi from "../api";
import { Redirect, useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";

function Animal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(
    function getEventOnLoad() {
      async function getEvent() {
        let event = await RepnileApi.getEvent(id);
        console.log(event, "this is animal in  getanimalonload");
        setEvent(event);
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

//   <img
//   src={RepnileApi.getImage(animal.imgUrl)}
//   alt={animal.name}
//   width="500"
//   height="600"
// />

// {event.title}
// <br />
// Weight: {event.date} grams
// <br />
// Coloration Pattern: {event.description}

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">

            <br />
            <br />
          </CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Animal;
