import React, { useEffect, useState, useContext } from "react";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";
import UserContext from "../UserContext";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const user = useContext(UserContext);

  useEffect(() => {
    async function getItem() {
      let item = await RepnileApi.getItem(id);
      // should i do parents here?
      setItem(item.item);
      setIsLoading(false);
    }
    getItem();
  }, [id]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // return (
  //   <section className="col-md-4">
  //     <Card>
  //       <CardBody>
  //         <CardTitle className="font-weight-bold text-center">
  //           {item.name}

  return(
      <div className="col-md-12 item">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {item.name}
              <br />
              {item.forSale}
              <br />
              Type: {item.type}
              <br />
              Description: {item.description}
              <br />
              Amount in Stock: {item.stock}
              <br />
              Price: {item.price}
              <br />
              <img
                src={RepnileApi.getImage(item.imgUrl)}
                alt={item.name}
                width="50%"
                height="50%"
              />
              <br />
              <Link to={`/items/${item.id}/edit`}>Edit</Link>
            </CardTitle>
            <CardText></CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

export default Item;
