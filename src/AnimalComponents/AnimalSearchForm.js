import React, { useState } from "react";
import "./AnimalSearchForm.css"

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const AnimalSearchForm = ({ search }) => {
  const INITIAL_STATE = {};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    search(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  // <input
  // id="weight"
  // name="weight"
  // value={formData.weight}
  // onChange={handleChange}
  // placeholder="Weight"
  // />

  return (
    <form onSubmit={handleSubmit} className="repnile">


      <input
      id="morph"
      name="morph"
      value={formData.morph}
      onChange={handleChange}
      placeholder="Morph"
      />

      <br/>
      <br/>
      <button className="btn btn-success float-right">Search</button>


    </form>
  );
};

export default AnimalSearchForm;
