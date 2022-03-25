import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Animal.css"
import AnimalCard from "./AnimalCard";

function Animal() {
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

  const forSale = animal.forSale
    ? "This critter is for sale!"
    : "This critter is currently unavailable";

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
            Weight: {animal.weight} grams
            <br />
            Coloration Pattern: {animal.colorationPattern}
            <br />
            Primary Color: {animal.primaryColor}
            <br />
            Secondary Color: {animal.secondaryColor}
            <br />
            Birth Date: {animal.birth_date}
            <br />
            Price: ${animal.price}
            <br />
            Sex: {animal.sex}
            <br />
            Species: {animal.species}
            <br />
            <img
              src={RepnileApi.getImage(animal.imgUrl)}
              alt={animal.name}
              width="50%"
              height="50%"
            />
            <br />
            <Link to={`/animals/${animal.id}/edit`}>Edit</Link>
          </CardTitle>
          <CardText></CardText>
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
