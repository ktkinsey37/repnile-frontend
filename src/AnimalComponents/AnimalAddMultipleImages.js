import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Alert from "../common/Alert";
import RepnileApi from "../api";
// import "./AnimalAddMultipleImages.css";

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

function AnimalAddMultipleImages() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({  });
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

  async function handleSubmit(e) {
    e.preventDefault()
    let formData = new FormData();

    //********* HERE IS THE CHANGE ***********
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name, "in the loops")
      formData.append('imgCollection', files[i], files[i].name);
    }
    let result = await RepnileApi.addAnimalImages(formData, id);
    // console.log(result, "this is result in handlesubmit of addanimalform");
    if (result) {
      navigate("/animals");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */


  return (
    <div className="AnimalAddMultipleImages">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Add Images</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}            >


              <div className="form-group">
                <label>Pictures</label>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg"
                  className="form-control"
                  onChange={handleOnUploadFile}
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

export default AnimalAddMultipleImages;
