import React, { useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import "./AnimalCard.css"



function AnimalCard({ animal }) {

    console.log(animal, "this is animal on animalcard render")

    const [isLoading, setIsLoading] = useState(false);
    
    const forSale = animal.forSale
    ? "This critter is for sale!"
    : "This critter is currently unavailable";
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
        <Card className="col-md-12 AnimalCard">
          <CardBody
          style={{
            display: "flex",
            justifyContent: "center" 

          }}>
          <img
          src={RepnileApi.getImage(animal.imgUrl)}
          alt={animal.name}
          width="95%"
          height="75%"
          className="position-absolute"
        />
        <br/>
            <CardTitle className="font-weight-bold text-center cardText">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
              <b>{animal.name}</b>
              <br/>
              {animal.sex}
            </CardTitle>
          </CardBody>
        </Card>
    );
  }
  
  export default AnimalCard;