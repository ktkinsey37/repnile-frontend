import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import RepnileApi from "../api"
import AnimalSearchForm from "./AnimalSearchForm";
import AnimalCard from "./AnimalCard";



function AnimalsPage({ }) {

    const [isLoading, setIsLoading] = useState(true);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
      async function getAnimals() {
        let animals = await RepnileApi.getAllAnimals();
        console.log(typeof(animals), "animals in the useeffect")
        setAnimals(animals)
        setIsLoading(false);
      }
      getAnimals()
    }, []);

    async function search(params) {
        setIsLoading(true)
        console.log(params, "params in search isnide animalspage")
        let animals = await RepnileApi.getAnimalsQuery(params);
        console.log(animals, "animals in search")
        setAnimals(animals);
        setIsLoading(false);
      }
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }

    console.log(animals, "animals before the map")
    console.log(animals.map((animal) => console.log(animal)), "this is animals on animals page")

  return (
    <div className="col-md-12 offset-md-4">
    <br/>
    <section className="col-md-10">
      <Card style={{ width: '30rem' }}>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>Animals</h2>
          </CardTitle>
          <CardText>
            <AnimalSearchForm search={search} />
          </CardText>
  
          <Card>
            {animals.map(animal => (
              <Link to={`/animals/${animal.id}`}>
                <AnimalCard animal={animal}/>
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

export default AnimalsPage;
