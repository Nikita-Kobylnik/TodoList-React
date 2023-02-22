import React from "react";
import { BsCheck } from "react-icons/bs";
import "./Check.scss";

function Check({ isCompleted }) {
  return (
    <div
      className={`Check-wrapper ${isCompleted ? "Check-wrapper--active" : ""}`}
    >
      {isCompleted && <BsCheck className="Check" />}
    </div>
  );
}

export default Check;
