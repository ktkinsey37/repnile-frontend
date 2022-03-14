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

function ItemAddForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    stock: "",
    price: "",
    forSale: true
  });
  const [formErrors, setFormErrors] = useState([]);
  // const [forSale, setForSale] = useState(true)

  console.debug(
      "ItemAddForm",
      "formData=", formData,
      "formErrors=", formErrors,
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
    let result = await RepnileApi.addItem(newFormData);
    console.log(result, "this is result in handlesubmit of addanimalform");
    if (result) {
      navigate("/items");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    let { name, value } = evt.target;
    if (evt.target.type == "checkbox"){
      evt.target.checked = !evt.target.checked

      value =  !evt.target.checked
    }
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="ItemAddForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Add Item</h2>
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
                <label>Type</label>
                <input
                    name="type"
                    className="form-control"
                    value={formData.type}
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
                
                <div className="form-group">
                  <label>Stock</label>
                  <input
                      name="stock"
                      className="form-control"
                      value={formData.stock}
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
                <label>For Sale
                <input
                    name="forSale"
                    type="checkbox"
                    checked={formData.forSale}
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
                    onChange={handleOnUploadFile}
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

export default ItemAddForm;