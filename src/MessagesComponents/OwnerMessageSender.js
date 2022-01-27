import React, { useState } from "react";
import RepnileApi from "../api";
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuid } from 'uuid';


/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const OwnerMessageSender = ({ messageThread }) => {
  const INITIAL_STATE = {messageText: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);
//   const [msgId, setMsgId] = useLocalStorage("msgId", undefined);
  

  /** Send {name, quantity} to parent
   *    & clear form. */

  async function handleSubmit(evt) {
    evt.preventDefault();

    // if (msgId === undefined){
    //   // Then a message hasn't been sent yet, so create an ID
    //   let newMsgId = uuid();
    //   setMsgId(newMsgId);
    // }

    formData.recipient = messageThread.uuid
    formData.sender = "dina"
    console.log(formData, "this is formdata before a message sends from owner sender")
    let result = await RepnileApi.postMessage(formData);
    // login(formData);
    // Needs to send message to db, and update message sent... can just post message tomessages/id?
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
      <label htmlFor="messageText">Message:</label>
      <input
        id="messageText"
        name="messageText"
        value={formData.messageText}
        onChange={handleChange}
        placeholder="Message Text"
      />
      <br/>
      <button>Send Message</button>
    </form>
  );
};

export default OwnerMessageSender;
