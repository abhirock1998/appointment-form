import React from "react";
import "./form-modal.css";
function FormModal({ form,handle }) {
  return (
    <div onClick={handle} className="taskModal">
      <div className="taskModal__main">
        <h1>You Successfully Book your Appointment</h1>
        <p>
          on {form?.startDate} at {form?.startTime}-{form?.endTime} . You have
          to visit {form?.repeatType} 
        </p>
      </div>
    </div>
  );
}

export default FormModal;
