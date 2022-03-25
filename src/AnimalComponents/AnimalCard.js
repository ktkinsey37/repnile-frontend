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
          height="200px"
          className="position-absolute"
        />

            <CardTitle className="font-weight-bold text-center">
              <b>{animal.name}</b>
              <br/>
            </CardTitle>
            <CardText className="cardtext">
              {animal.colorationPattern} {animal.species}
              <br/>
              composed of
              <br/>
              {animal.primaryColor} and {animal.secondaryColor}
              <br/>
              <br/>
              {forSale}
            </CardText>
          </CardBody>
        </Card>
    );
  }
  
  export default AnimalCard;