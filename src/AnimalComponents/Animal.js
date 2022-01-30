import React, {useEffect, useState, useContext} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import AnimalCard from "./AnimalCard";
import { Redirect, useParams } from "react-router-dom";
import UserContext from "../UserContext";



function Animal() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [animal, setAnimal] = useState([]);
    const user = useContext(UserContext)

  
    useEffect(function getAnimalOnLoad() {
      async function getAnimal() {
        let animal = await RepnileApi.getAnimal(id);
        // should i do parents here?
        console.log(animal, "this is animal in  getanimalonload")
        setAnimal(animal)
        setIsLoading(false);
      }
      getAnimal()
    }, [id]);
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-4">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {animal.name}
              <br/>
              Weight: {animal.weight} grams
              <br/>
              Coloration Pattern: {animal.colorationPattern}
              <br/>
              Primary Color: {animal.primaryColor}

              <img src={animal.imgUrl} alt={animal.name} width="500" height="600"/>

              
            </CardTitle>
            <CardText>

            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default Animal;