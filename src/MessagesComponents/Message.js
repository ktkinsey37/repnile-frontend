import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";


// Accepts a message prop retrieved from an earlier call and renders the single message
// including From, To, createdAt (datetime), and messageText.
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