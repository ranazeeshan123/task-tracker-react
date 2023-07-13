import React from "react";
import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [ text, setText ] = useState("");
  const [ day, setDay ] = useState("");
  const [ reminder, setReminder ] = useState(false);
  const onSubmit = (e) => {
    console.log("Submit")
    e.preventDefault()

    if (!text){
      alert("Please add Text")
      return
    }

    onAdd({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Label"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          name=""
          id=""
          placeholder="Enter Label"
          checked = {reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
