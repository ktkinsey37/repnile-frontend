import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row
} from "reactstrap";
import ItemSearchForm from "./ItemSearchForm";
import ItemCard from "./ItemCard";
import RepnileApi from "../api";
import "../AnimalComponents/AnimalsPage.css"

function ItemsPage({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      let items = await RepnileApi.getAllItems();
      console.log(items, "items in the useeffect");
      setItems(items);
      setIsLoading(false);
    }
    getItems();
  }, []);

  async function search(params) {
    setIsLoading(true);
    console.log(params, "params in search isnide animalspage");
    let items = await RepnileApi.getItemsQuery(params);
    setItems(items);
    setIsLoading(false);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

    // console.log(animals, "animals before the map")
    // console.log(animals.map((animal) => console.log(animal)), "this is animals on animals page")

  return (
    <div className="col-md-12 animalsPage">
    <br/>
    <section className="col-md-10">
      <Card>
        <CardBody className="col-md-12 mainCard">
          <CardTitle className="font-weight-bold text-center">
            <h2>Items</h2>
          </CardTitle>
          <CardText>
          </CardText>
            <Row className="animalsPage">
              <Card>
                {items.map(item => (
                  <Link className="col-md-6 animalCard" to={`/items/${item.id}`}>
                    <ItemCard item={item}/>
                  </Link>
                ))}
              </Card>
            </Row>
        </CardBody>
      </Card>
    </section>
    </div>
  );
}

// The above can go inside of list group

export default ItemsPage;
