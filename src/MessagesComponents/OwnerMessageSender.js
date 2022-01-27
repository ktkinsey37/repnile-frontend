import React, { useState } from "react";
import RepnileApi from "../api";
import useLocalStorage from './hooks/useLocalStorage';
import { v4 as uuid } from 'uuid';


/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const MessageSender = () => {
  const INITIAL_STATE = {message: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [msgId, setMsgId] = useLocalStorage("msgId", undefined);
  

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();

    // if (msgId === undefined){
    //   // Then a message hasn't been sent yet, so create an ID
    //   msgId = uuid();
    //   setMsgId(msgId);
    // }
    // Not needed for owner


    // Need to set user in local storage and then just get them out, create this when

    formData.sender = "dina"
    // This is where I will need to have their userid
    formData.recipient = "dina"
    await RepnileApi.postMessage(formData);
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

export default MessageSender;
