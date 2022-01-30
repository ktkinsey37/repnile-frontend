import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import MessageThread from "./MessageThread"
import RepnileApi from "../api"



function MessagesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [messageThreads, setMessageThreads] = useState([]);

    useEffect(() => {
      async function getMessageThreads() {
        let messageThreads = await RepnileApi.getAllMessageThreads();
        messageThreads = messageThreads.messages
        setMessageThreads(messageThreads)
        setIsLoading(false);
      }
      getMessageThreads()
    }, []);

    async function handleRemove(id) {
      await RepnileApi.deleteMessageThread(id)
      console.log(id);
      // remove item
    }
  
    console.log(messageThreads, "this is messagethreads before it runs in react")
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
            <h2>Messages</h2>
          </CardTitle>
          <CardText>
          </CardText>
  
          <Card>
          {messageThreads.map(thread => (
            <div>
              <button onClick={() => handleRemove(thread.id)}>x</button>
                <Link to={`/messages/${thread.id}`}>
                  {thread.id}
                </Link>
            </div>
          ))}
          </Card>
          The above can go inside of list group

        </CardBody>
      </Card>
    </section>
    </div>
  );
}

//           <Card>
// {messageThreads.map(thread => (
//   <Link to={`/messages/${thread.id}`}>
//     <MessageThread />
//   </Link>
// ))}
// </Card>
// The above can go inside of list group

export default MessagesPage;
