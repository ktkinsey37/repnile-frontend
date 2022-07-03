import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Row } from "reactstrap";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Animal.css"
import AnimalCard from "./AnimalCard";

function Animal() {

  // Id is passed as a url param, while the animal is being retrieved based on id setloading is true
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState([]);
  const [parents, setParents] = useState([]);
  // const user = useContext(UserContext);

  useEffect(
    function getAnimalOnLoad() {
      async function getAnimal() {
        let parents = [];
        let animal = await RepnileApi.getAnimal(id);
        // WHAT IF GETANIMALPARENTAGE DOESNT RETURN OR THROWS AN ERROR? TRY CATCH?
        let parentIds = await RepnileApi.getAnimalParentage(id);
        parentIds = parentIds.parentsIds
        for (let i = 0; i < parentIds.length; i++){
          console.log(parentIds[i], "should be abinak id")
          let parent = await RepnileApi.getAnimal(parentIds[i].parentId);
          console.log(parent, "parent inside the loop")
          parents.push(parent)
        }
        console.log(animal, parents, "this is animal and parents in  getanimalonload");
        setParents(parents);
        setAnimal(animal);
        setIsLoading(false);

        // should i do parents here?

      }
      getAnimal();
    },
    [id]
  );

  async function handleRemove(imgUrl) {
    RepnileApi.deleteImage(imgUrl)
    console.log(imgUrl);
    window.location.href = window.location.href;
  }

  const forSale = animal.forSale
    ? "This critter is for sale!"
    : "This critter is currently unavailable";

    const breeder = animal.forSale
    ? "This critter is a breeder!"
    : "This critter is not a breeder";

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="col-md-12 animal">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {animal.name}
            <br />
            {forSale}
            <br />
            {breeder}
            <br/>
            Weight: {animal.weightInGrams} grams
            <br />
            Morph: {animal.morph}
            <br />
            Base Color: {animal.baseColor}
            <br />
            Pattern: {animal.pattern}
            <br />
            Hatch Date: {animal.hatch_date}
            <br />
            Price: ${animal.price}
            <br />
            Price with Plan: ${animal.priceWithPlan}
            <br />
            Sex: {animal.sex}
            <br />
            <br />
            <img
              src={RepnileApi.getImage(animal.imgUrl)}
              alt={animal.name}
              width="50%"
              height="50%"
            />
            <br />
            <Link to={`/animals/${animal.id}/edit`}>Edit</Link>
            <br/>
            <Link to={`/animals/${animal.id}/images`}>Add Pictures</Link>
          </CardTitle>
          <CardText>
          
          <Row className="col-md-12 offset-md-1">
              
          {animal.photos.map(photo => (
            <div               className="col-md-3 animalPhoto">
              <img
              className="col-md-12"
              src={RepnileApi.getImage(photo)}
              alt={animal.name}
              height="250px"
              />
              <button onClick={() => handleRemove(photo)}>x</button>

            </div>

          ))}
        </Row>

          </CardText>
        </CardBody>

      </Card>
      <br/>
      <h1 className="parents">PARENTS:</h1>
      <Card>
      {parents.map(parent => (
        <Link to={`/animals/${parent.id}`}>
          <AnimalCard animal={parent}/>
          <br/>
        </Link>
      ))}
    </Card>
    </div>
  );
}

export default Animal;
