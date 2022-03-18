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
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: ""
      });
    const [formErrors, setFormErrors] = useState([]);
      // const [forSale, setForSale] = useState(true)
    
      console.debug(
        "AddParentageForm",
        "formData=",
        formData,
        "formErrors=",
        formErrors
      );

    useEffect(() => {
      async function getAnimals() {
        let animals = await RepnileApi.getAllAnimals();
        console.log(animals, "animals in the useeffect")
        setAnimals(animals)
        setIsLoading(false);
      }
      getAnimals()
    }, []);
    
    async function handleSubmit(evt) {
    evt.preventDefault();
    // const newFormData = new FormData();
    // Object.entries(formData).forEach(([k, v]) => {
    //   newFormData.append(k, v);
    // });
    // newFormData.append("imgUrl", file);
    let result = await RepnileApi.addEvent(formData);
    console.log(result, "this is result in handlesubmit of addevent");
    if (result) {
        navigate("/events");
    } else {
        setFormErrors(result.errors);
    }
    }
    
      /** Update form data field */
    function handleChange(evt) {
    let { name, value } = evt.target;
    // console.log(evt.target, "this is evt target");
    // if (evt.target.type == "checkbox") {
    //   evt.target.checked = !evt.target.checked;

    //   value = !evt.target.checked;
    //   console.log(evt.target.checked, "this is evt.tgt.check");
    //   console.log(value, "this is value in hitting the check");
    // }
    setFormData((data) => ({ ...data, [name]: value }));
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
                    <select name="subject" id="subject">
                        {animals.map((animal) => <option key={animal.name} value={animal.name}>{animal.name}</option>)}
                    </select>
                </div>

                <div className="form-group">
                <label>Is the parent of</label>
                <div className="form-group">
                    <select name="subject" id="subject">
                        {animals.map((animal) => <option key={animal.name} value={animal.name}>{animal.name}</option>)}
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
    