import React, { useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";



function AnimalCard({ animal }) {

    const [isLoading, setIsLoading] = useState(false);


    let logoUrl

    // if (animal.imgUrl != null){
    //     logoUrl = `http://joelburton-jobly.surge.sh/${company.logoUrl}`
    // }
    
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-12 AnimalCard">
        <Card>
          <CardBody className="col-md-12 ">
          <img
          src={RepnileApi.getImage(animal.imgUrl)}
          alt={animal.name}
          width="50px"
          height="60px"
          className="position-absolute top-5 end-5 float-right ml-5"
        />

            <CardTitle className="font-weight-bold text-center">
              <b>{animal.name}</b>
              <br/>
            </CardTitle>
            <CardText>
              {animal.species}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default AnimalCard;