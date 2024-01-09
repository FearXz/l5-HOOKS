import React from "react";
import NavbarComp from "./NavbarComp";
import { Container } from "react-bootstrap";

function MyHeader(props) {
  return <NavbarComp handlePage={props.handlePage} callbackSubmit={props.callbackSubmit} />;
}

export default MyHeader;
