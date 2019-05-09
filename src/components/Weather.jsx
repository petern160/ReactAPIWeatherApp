import React, { Component } from "react";
// cannot use this keyword because it is not a class anymore
// instead pass props into parameter
const Weather = props => (
  <div>
    {/* truthy and truthy will render the latest truthy */}
    {props.city && props.country && (
      <p>
        Location: {props.city}, {props.country}
      </p>
    )}
    {props.temperature && <p> Temperature: {props.temperature}</p>}
    {props.humidity && <p> Humidity: {props.humidity}</p>}
    {props.description && <p>Conditions: {props.description}</p>}
    {props.error && <p> {props.error}</p>}
  </div>
);

export default Weather;
