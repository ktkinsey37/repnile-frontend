import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
} from "reactstrap";
import RepnileApi from "../api"
import AnimalSearchForm from "./AnimalSearchForm";
import AnimalCard from "./AnimalCard";



function ForSalePage({ }) {

    const [isLoading, setIsLoading] = useState(true);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
      async function getAnimals() {
        let animals = await RepnileApi.getForSaleAnimals();
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
        // NEED TO MAKE A NEW FUNCTION
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
    <div className="col-md-12 offset-md-1">
    <br/>
    <section className="col-md-10">
      <Card>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>Animals</h2>
          </CardTitle>
          <CardText>
            <AnimalSearchForm search={search} />
          </CardText>
            <Row>
              
              {animals.map(animal => (
                <Link className="col-md-3" to={`/animals/${animal.id}`}>
                  <AnimalCard animal={animal}/>
                </Link>
              ))}
            </Row>

        </CardBody>
      </Card>
    </section>
    </div>
  );
}

// The above can go inside of list group

export default ForSalePage;
