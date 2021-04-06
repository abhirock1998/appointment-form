import "./App.css";
import React from "react";
import { FormInput, FormWeekCard, ConfirmationModal } from "./component";
import { ShiftOption, RepeatOption } from "./fixture";
function App() {
  const [form, setForm] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleSelect = (e) => {
    const { value, name } = e.target;
    setForm((prop) => {
      return { ...prop, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ("repeatType" in form) {
      if (form["repeatType"] !== "None") {
        setShow(!show);
      }
    }
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <form className="app">
      {show && <ConfirmationModal handle={handleShow} form={form} />}
      <h1>Select Date & Time For Appointement</h1>
      <FormInput
        name="startDate"
        type="date"
        change={handleSelect}
        id="input-1"
        lable="Select Start Date"
      />
      <FormInput
        nameSelect="repeatType"
        id="input-2"
        change={handleSelect}
        options={RepeatOption}
        isInput={false}
        lable="Select Repeat Type"
      />
      <FormInput
        id="input-3"
        nameSelect="shift"
        change={handleSelect}
        options={ShiftOption}
        isInput={false}
        lable="Select Shift"
      />
      <FormInput
        name="startTime"
        type="time"
        change={handleSelect}
        id="input-4"
        lable="Select Start Time"
      />
      <FormInput
        name="endTime"
        id="input-5"
        change={handleSelect}
        type="time"
        lable="Select End Time"
      />
      <FormWeekCard change={handleSelect} />
      <div className="weeks__days">
        <p>
          <b>Weeks days only</b>
        </p>
        <input
          onChange={handleSelect}
          name="week-only"
          value="weeks-days"
          type="radio"
        />
      </div>
      <div className="app__btn">
        <input type="reset" value="Reset"/>
        <button onClick={handleSubmit}> + Add</button>
      </div>
    </form>
  );
}

export default App;
