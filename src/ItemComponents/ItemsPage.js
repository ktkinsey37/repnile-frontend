import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import ItemSearchForm from "./ItemSearchForm";
import ItemCard from "./ItemCard";
import RepnileApi from "../api";

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
    <div className="col-md-12 offset-md-1">
    <br/>
    <section className="col-md-10">
      <Card>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>Items</h2>
          </CardTitle>
          <CardText>
            <ItemSearchForm search={search} />
          </CardText>

          <Card>
            {items.map(item => (
              <Link to={`/items/${item.id}`}>
                <ItemCard item={item}/>
              </Link>
            ))}
          </Card>
        </CardBody>
      </Card>
    </section>
    </div>
  );
}

// The above can go inside of list group

export default ItemsPage;
