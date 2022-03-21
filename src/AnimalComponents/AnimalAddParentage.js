import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import RepnileApi from "../api"



function AnimalAddParentage({ }) {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [animals, setAnimals] = useState([]);
    const [parent, setParent] = useState("");
    const [child, setChild] = useState("");
    const [formErrors, setFormErrors] = useState([]);
      // const [forSale, setForSale] = useState(true)
    
      console.debug(
        "AddParentageForm",
        "formErrors=",
        formErrors
      );

    useEffect(() => {
      async function getAnimals() {
        let animals = await RepnileApi.getAllAnimals();
        console.log(animals, "animals in the useeffect")
        setAnimals(animals)
        setParent(animals[0].id)
        setChild(animals[0].id)
        setIsLoading(false);
      }
      getAnimals()
    }, []);
    
    async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(parent, child, "parent and child on submit")
    let result = await RepnileApi.addAnimalParentage(String(parent), String(child));
    console.log(result, "this is result in handlesubmit of addevent");
    if (result) {
        navigate("/animals");
    } else {
        setFormErrors(result.errors);
    }
    }
    
      /** Update form data field */
    function handleParentChange(evt) {
      setParent(evt.target.value);
    console.log(parent, "this is changeparent")
    }

    function handleChildChange(evt) {
      setChild(evt.target.value);
    console.log(child, "this is changeparent")
    }
    
    

    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }

    return (
    <div className="AddParentageForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Add Parentage:</h2>
        <div className="card">
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select name="parent" id="parent" onChange={handleParentChange}>
                        {animals.map((animal) => <option key={animal.name} value={animal.id}>{animal.name}</option>)}
                    </select>
                </div>

                <div className="form-group">
                <label>Is the parent of</label>
                <div className="form-group">
                    <select name="child" id="child" onChange={handleChildChange}>
                        {animals.map((animal) => <option key={animal.name} value={animal.id}>{animal.name}</option>)}
                    </select>
                </div>
                </div>
                <br/>
                <button
                type="submit"
                className="btn btn-success float-right"
                onSubmit={handleSubmit}
                >
                Submit
                </button>
            </form>
            </div>
        </div>
        </div>
    </div>
    );
}
    
    // {formErrors.length
    //   ? <Alert type="danger" messages={formErrors} />
    //   : null
    // }
    // THIS GOES ABOVE SUBMIT BUTTON
    
    export default AnimalAddParentage;
    