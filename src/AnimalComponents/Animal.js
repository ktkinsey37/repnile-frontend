import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Animal.css"

function Animal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState([]);
  // const user = useContext(UserContext);

  useEffect(
    function getAnimalOnLoad() {
      async function getAnimal() {
        let animal = await RepnileApi.getAnimal(id);
        let parents = 
        // should i do parents here?
        console.log(animal, "this is animal in  getanimalonload");
        setAnimal(animal);
        setIsLoading(false);
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
    </div>
  );
}

export default Animal;
