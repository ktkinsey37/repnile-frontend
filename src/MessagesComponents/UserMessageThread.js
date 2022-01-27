import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import RepnileApi from "../api"
import Message from "./Message"
import OwnerMessageSender from "./OwnerMessageSender";


function UserMessageThread({ id }) {
    // const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [messageThread, setMessageThread] = useState([]);
    const [messages, setMessages] = useState([])

  
    useEffect(function getMessageThreadOnLoad() {
      async function getMessageThread() {
        console.log(id, "id param")
        let messageThread = await RepnileApi.getMessageThread(id);
        // should i do parents here?
        console.log(messageThread, "this is msgthread before its loaded up")

        setMessageThread(messageThread.messageThread)
        setMessages(messageThread.messageThread.messages)
        setIsLoading(false);
      }
      getMessageThread()
    }, [id]);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

  
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
           
              
            </CardTitle>
            <CardText>   
              Message Thread Id: {messageThread.uuid} <br/>
              Created at:{messageThread.createdAt} <br/>
              Updated at: {messageThread.updatedAt} <br/>
              Last Checked at:{messageThread.lastCheckedAt}
                {messages.map(message => <Message message={message}/>)}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default UserMessageThread;