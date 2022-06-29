import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import Alert from "../common/Alert";
import RepnileApi from "../api";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function AnimalEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    hatchDate: "",
    weightInGrams: "",
    sex: "",
    morph: "",
    baseColor: "",
    pattern: "",
    price: "",
    priceWithPlan: "",
    forSale: true,
    breeder: true,
  });
  const [formErrors, setFormErrors] = useState([]);
  // const [forSale, setForSale] = useState(true)

  console.debug(
      "AnimalEditForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  useEffect(() => {
    async function getAnimal() {
      let animal = await RepnileApi.getAnimal(id);
      console.log(animal, "this is animal in getAnimal on load at edit animal form")
      const INITIAL_STATE = {
      name: animal.name,
      species: animal.species,
      hatchDate: animal.hatch_date,
      weightInGrams: animal.weightInGrams,
      sex: animal.sex,
      morph: animal.morph,
      baseColor: animal.baseColor,
      pattern: animal.pattern,
      price: animal.price,
      priceWithPlan: animal.priceWithPlan,
      forSale: animal.forSale,
      breeder: animal.breeder};
      setFormData(INITIAL_STATE)
      // setIsLoading(false);
    }
    getAnimal()
  }, []);

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData, "formdata on submit")
    let result = await RepnileApi.updateAnimal(formData, id);
    console.log(result, "this is result in handlesubmit of AnimalEditForm")
    if (result) {
      navigate("/animals");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    let { name, value } = evt.target;
    console.log(evt.target, "this is evt target")
    if (evt.target.type == "checkbox"){
      evt.target.checked = !evt.target.checked

      value =  !evt.target.checked
      console.log(evt.target.checked, "this is evt.tgt.check")
      console.log(value, "this is value in hitting the check")
    }
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="AnimalEditForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Edit Animal</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label>Name</label>
                  <input
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formData.name}
                  />
                </div>

                <div className="form-group">
                <label>Species</label>
                <input
                    name="species"
                    className="form-control"
                    value={formData.species}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                  <label>Hatch Date</label>
                  <input
                      name="hatchDate"
                      className="form-control"
                      value={formData.hatchDate}
                      onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Sex</label>
                  <input
                      name="sex"
                      className="form-control"
                      value={formData.sex}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Weight in Grams</label>
                  <input
                      name="weightInGrams"
                      className="form-control"
                      value={formData.weightInGrams}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                <label>Morph</label>
                <input
                    name="morph"
                    className="form-control"
                    value={formData.morph}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Base Color</label>
                <input
                    name="primaryColor"
                    className="form-control"
                    value={formData.baseColor}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Pattern</label>
                <input
                    name="pattern"
                    className="form-control"
                    value={formData.pattern}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Price</label>
                <input
                    name="price"
                    className="form-control"
                    value={formData.price}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Price with Plan</label>
                <input
                    name="priceWithPlan"
                    className="form-control"
                    value={formData.priceWithPlan}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>For Sale
                <input
                    name="forSale"
                    type="checkbox"
                    checked={formData.forSale}
                    onChange={handleChange}
                /></label>
                </div>

                <div className="form-group">
                <label>Breeder
                <input
                    name="breeder"
                    type="checkbox"
                    checked={formData.breeder}
                    onChange={handleChange}
                /></label>
                </div>

                <div className="form-group">
                <label>Picture</label>
                <input
                    type="file"
                    name="imgUrl"
                    accept="image/png, image/jpeg"
                    className="form-control"
                    value={formData.imgUrl}
                    onChange={handleChange}
                />
                </div>

                <br/>

                <button
                    type="submit"
                    className="btn btn-primary float-right"
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

export default AnimalEditForm;