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

function ItemEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      "ItemEditForm",
      "formData=", formData,
      "formErrors=", formErrors,
  );

  useEffect(() => {
    async function getItem() {
      let item = await RepnileApi.getItem(id);
      console.log(item, "this is Item in getItem on load at edit Item form")
      const INITIAL_STATE = {
      name: item.name,
      type: item.type,
      description: item.description,
      stock: item.stock,
      price: item.price,
      forSale: item.forSale};
      setFormData(INITIAL_STATE)
      // setIsLoading(false);
    }
    getItem()
  }, []);

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await RepnileApi.updateItem(formData, id);
    console.log(result, "this is result in handlesubmit of AnimalEditForm")
    if (result) {
      navigate("/items");
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
      <div className="ItemEditForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Edit Item</h2>
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
                <label>Type</label>
                <input
                    name="species"
                    className="form-control"
                    value={formData.species}
                    onChange={handleChange}
                />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <input
                      name="birthDate"
                      className="form-control"
                      value={formData.birthDate}
                      onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>Amount in Stock</label>
                  <input
                      name="stock"
                      className="form-control"
                      value={formData.stock}
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

export default ItemEditForm;