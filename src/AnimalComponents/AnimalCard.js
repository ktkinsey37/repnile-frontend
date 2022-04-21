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

    const [isLoading, setIsLoading] = useState(false);


    let logoUrl

    // if (animal.imgUrl != null){
    //     logoUrl = `http://joelburton-jobly.surge.sh/${company.logoUrl}`
    // }
    
    const forSale = animal.forSale
    ? "This critter is for sale!"
    : "This critter is currently unavailable";
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
        <Card className="col-md-12 AnimalCard">
          <CardBody>
          <img
          src={RepnileApi.getImage(animal.imgUrl)}
          alt={animal.name}
          width="180px"
          height="210px"
          className="position-absolute"
        />
        <br/>
            <CardTitle className="font-weight-bold text-center">
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