import React from "react";
import "./form-week.css";
function FormWeek({change}) {
  const WeeksList = [
    {
      option: "Mon",
      value: "mon",
    },
    {
      option: "TUE",
      value: "tue",
    },
    {
      option: "WED",
      value: "mwed",
    },
    {
      option: "THU",
      value: "thu",
    },
    {
      option: "FRI",
      value: "fri",
    },
    {
      option: "SAT",
      value: "sat",
    },
    {
      option: "SUN",
      value: "sun",
    },
  ];
  return (
    <div className="formWeek">
        <p>Select the day of Week</p>
      {WeeksList.map(({ option, value }, index) => (
        <div key={index} className="forWeek__option">
          <p>
            <b>{option}</b>
          </p>
          <input  name="week-days" onClick={change}  value={value} type="radio" />
        </div>
      ))}
    </div>
  );
}

export default FormWeek;
