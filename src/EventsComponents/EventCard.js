import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";



function EventCard({ event }) {

    let logoUrl

    // <img src={logoUrl} className="position-absolute top-5 end-5 float-right ml-5"/>
  
    return (
      <section className="col-md-12 UpcomingEventsCard">
        <Card>
          <CardBody className="col-md-12 ">

            <CardTitle className="font-weight-bold text-center">
              <b>{event.title}</b>
              <br/>
              <p>{event.date}</p>
            </CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default EventCard;