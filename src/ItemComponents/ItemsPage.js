import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import RepnileApi from "../api";

// function ItemsPage({}) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [animals, setAnimals] = useState([]);

//   useEffect(() => {
//     async function getAnimals() {
//       let animals = await RepnileApi.getAllAnimals();
//       console.log(typeof animals, "animals in the useeffect");
//       setAnimals(animals);
//       setIsLoading(false);
//     }
//     getAnimals();
//   }, []);

function ItemsPage({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   async function getItems() {
  //     let items = await RepnileApi.getAllItems();
  //     console.log(typeof items, "animals in the useeffect");
  //     setAnimals(items);
  //     setIsLoading(false);
  //   }
  //   getItems();
  // }, []);

  // async function search(params) {
  //   setIsLoading(true);
  //   console.log(params, "params in search isnide animalspage");
  //   let items = await RepnileApi.getItemsQuery(params);
  //   setItems(items);
  //   setIsLoading(false);
  // }

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  // console.log(animals, "animals before the map");
  // console.log(
  //   animals.map((animal) => console.log(animal)),
  //   "this is animals on animals page"
  // );

  return <div> </div>;
}

// The above can go inside of list group

export default ItemsPage;
