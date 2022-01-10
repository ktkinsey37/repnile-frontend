import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import { Redirect, useParams } from "react-router-dom";



function Message({ message }) {

  
    return (
      <section className="col-md-12" className="AnimalCard">
        <Card>
          <CardBody className="col-md-12 ">
            <CardTitle className="font-weight-bold">
              <b>From: {message.sender}</b>
              <br/>
              <b>To: {message.recipient}</b>
              <br/>
            </CardTitle>
            <CardText>
              {message.createdAt}
              <br/>
              {message.messageText}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default Message;