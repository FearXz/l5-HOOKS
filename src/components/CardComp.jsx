import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function CardComp(props) {
  const [selected, setSelected] = useState(false);

  function toggleSelected() {
    let toggle = !selected;
    setSelected(toggle);
    console.log(toggle);
  }
  function handleDetail(bookObj) {
    console.log(bookObj);
    props.callbackDetailPage("detail");
    props.callbackBook(bookObj);
  }

  return (
    <Card key={props.book.asin} className={selected ? "shadow-lg" : ""}>
      <Card.Img
        variant="top"
        style={{ height: "300px" }}
        className=" object-fit-cover"
        src={props.book.img}
        onClick={toggleSelected}
      />
      <Card.Body>
        <Card.Title style={{ height: "100px" }} className=" overflow-hidden">
          {props.book.title}
        </Card.Title>
        <Card.Text></Card.Text>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => handleDetail(props.book)}>
              Detail
            </Button>
          </Col>
          <Col className=" d-flex justify-content-end">
            <Button variant="danger" onClick={() => props.callbackDelete(props.book.asin)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
