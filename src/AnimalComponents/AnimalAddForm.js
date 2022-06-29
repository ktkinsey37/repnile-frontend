import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from "../common/Alert";
import RepnileApi from "../api";
import "./AnimalAddForm.css";

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

function AddAnimalForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
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
    "AddAnimalForm",
    "formData=",
    formData,
    "formErrors=",
    formErrors
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  const handleOnUploadFile = (e) => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newFormData = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      newFormData.append(k, v);
    });
    newFormData.append("imgUrl", file);
    let result = await RepnileApi.addAnimal(newFormData);
    console.log(result, "this is result in handlesubmit of addanimalform");
    if (result) {
      navigate("/animals");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    let { name, value } = evt.target;

    if (evt.target.type == "checkbox") {
      evt.target.checked = !evt.target.checked;

      value = !evt.target.checked;
    }
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <div className="AddAnimalForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Add Animal</h2>
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
                  name="baseColor"
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
                <label>
                  Breeder
                  <input
                    name="breeder"
                    type="checkbox"
                    checked={formData.breeder}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="form-group">
                <label>
                  For Sale
                  <input
                    name="forSale"
                    type="checkbox"
                    checked={formData.forSale}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="form-group">
                <label>Picture</label>
                <input
                  type="file"
                  name="imgUrl"
                  accept="image/png, image/jpeg"
                  className="form-control"
                  onChange={handleOnUploadFile}
                  multiple
                />
              </div>
              <br />
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

export default AddAnimalForm;
