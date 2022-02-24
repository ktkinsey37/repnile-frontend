import React, { useState } from "react";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const ItemSearchForm = ({ search }) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
      id="species"
      name="species"
      value={formData.species}
      onChange={handleChange}
      placeholder="Species"
      />

      <input
      id="colorationPattern"
      name="colorationPattern"
      value={formData.colorationPattern}
      onChange={handleChange}
      placeholder="Coloration Pattern"
      />

      <input
      id="primaryColor"
      name="primaryColor"
      value={formData.primaryColor}
      onChange={handleChange}
      placeholder="Primary Color"
      />

      <input
      id="secondaryColor"
      name="secondaryColor"
      value={formData.secondaryColor}
      onChange={handleChange}
      placeholder="Secondary Color"
      />
      <button>Search</button>
    </form>
  );
};

export default ItemSearchForm;
