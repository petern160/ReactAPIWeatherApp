import React, { Component } from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City goes here" />
        <input type="text" name="country" placeholder="Country goes here" />
        <button>Return Weather Conditions</button>
      </form>
    </div>
  );
};

export default Form;
