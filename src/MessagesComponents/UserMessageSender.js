import React, { useState } from "react";
import RepnileApi from "../api";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";
import UserMessageThread from "./UserMessageThread";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const MessageSender = () => {
  const INITIAL_STATE = { messageText: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [msgId, setMsgId] = useLocalStorage("msgId", undefined);

  /** Send {name, quantity} to parent
   *    & clear form. */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let newMsgId = msgId;
    if (newMsgId === undefined) {
      // Then a message hasn't been sent yet, so create an ID
      newMsgId = uuid();
      setMsgId(newMsgId);
    }

    // Need to fix that this aint refresing enough to send it through

    // Need to set user in local storage and then just get them out, create this when
    const data = {
      messageText: formData.messageText,
      sender: newMsgId,
      recipient: "dina",
    };
    console.log(
      formData,
      data,
      "this is formdata before a message sends from user sender"
    );
    let result = await RepnileApi.postMessage(data);
    // login(formData);
    // Needs to send message to db, and update message sent... can just post message tomessages/id?
    setFormData(INITIAL_STATE);
  }

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <div>
      <UserMessageThread id={msgId} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="messageText">Message:</label>
        <input
          id="messageText"
          name="messageText"
          value={formData.messageText}
          onChange={handleChange}
          placeholder="Message Text"
        />
        <br />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default MessageSender;
