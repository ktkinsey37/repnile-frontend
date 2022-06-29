import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Alert from "../common/Alert";
import RepnileApi from "../api";
// import "./EventAddForm.css"

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

function EventAddForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: ""
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
      let result = await RepnileApi.addEvent(newFormData);
      console.log(result, "this is result in handlesubmit of addeventsform");
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

  return (
    <div className="AddAnimalForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Add Event</h2>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <br/>
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

export default EventAddForm;
