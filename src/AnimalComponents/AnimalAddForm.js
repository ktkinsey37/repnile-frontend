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
  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    birthDate: "",
    weight: "",
    sex: "",
    colorationPattern: "",
    primaryColor: "",
    secondaryColor: "",
    price: "",
    forSale: true,
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
    setFiles(e.target.files);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newFormData = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      newFormData.append(k, v);
    });
    newFormData.append("imgUrl", files);
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
                <label>Birth Date</label>
                <input
                  name="birthDate"
                  className="form-control"
                  value={formData.birthDate}
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
