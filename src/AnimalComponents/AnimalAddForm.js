import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

function AddAnimalForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    age: "",
    weight: "",
    sex: "",
    colorationPattern: "",
    primaryColor: "",
    secondaryColor: "",
    price: "",
    forSale: ""
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "AddAnimalForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await RepnileApi.addAnimal(formData);
    if (result.success) {
      navigate("/animals");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="AddAnimalForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
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
                  <label>Age</label>
                  <input
                      name="age"
                      className="form-control"
                      value={formData.age}
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
                  <label>Weight</label>
                  <input
                      name="weight"
                      className="form-control"
                      value={formData.weight}
                      onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                <label>Coloration Pattern</label>
                <input
                    name="colorationPattern"
                    className="form-control"
                    value={formData.colorationPattern}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Primary Color</label>
                <input
                    name="primaryColor"
                    className="form-control"
                    value={formData.primaryColor}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Secondary Color</label>
                <input
                    name="secondaryColor"
                    className="form-control"
                    value={formData.secondaryColor}
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
                <label>For Sale</label>
                <input
                    name="forSale"
                    className="form-control"
                    value={formData.forSale}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                <label>Picture</label>
                <input
                    name="imgUrl"
                    className="form-control"
                    value={formData.imgUrl}
                    onChange={handleChange}
                />
                </div>



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

export default AddAnimalForm;