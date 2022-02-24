import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import { Redirect, useParams } from "react-router-dom";



function UpcomingEventCard({ event }) {

    let logoUrl

    // <img src={logoUrl} className="position-absolute top-5 end-5 float-right ml-5"/>
  
    return (
      <section className="col-md-12" className="UpcomingEventsCard">
        <Card>
          <CardBody className="col-md-12 ">

            <CardTitle className="font-weight-bold text-center">
              <b>{event.id}</b>
              <br/>
            </CardTitle>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default UpcomingEventCard;