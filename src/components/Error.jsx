import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ color, error }) => (
  <Alert variant={color}>
    <p>{error}</p>
  </Alert>
);

export default Error;
