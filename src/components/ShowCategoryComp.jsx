import React from "react";
import { Col, Row } from "react-bootstrap";
import CardComp from "./CardComp";

function ShowCategoryComp(props) {
  return (
    <Row className="gy-3 mb-5">
      {props.categoryArray
        .filter((book) => book.title.toLowerCase().includes(props.valueToSearch.toLowerCase()))
        .map((book, index) => (
          <Col xs={6} md={4} xl={3} xxl={2} key={`cardBook-${index}`}>
            <CardComp
              book={book}
              callbackDetailPage={props.callbackDetailPage}
              callbackDelete={props.callbackDelete}
              callbackBook={props.callbackBook}
            />
          </Col>
        ))}
    </Row>
  );
}
export default ShowCategoryComp;
