import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";



function Message({ message }) {

  
    return (
      <section className="col-md-12">
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