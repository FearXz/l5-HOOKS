import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import { Col, Row } from "react-bootstrap";
import AddCommentComp from "./AddCommentComp";
import CommentAreaComp from "./CommentAreaComp";

function MyDetail(props) {
  console.log(props.bookObj);

  const [commentUpdate, setCommentUpdate] = useState(false);

  useEffect(() => {
    console.log("CommentAreaComp aggiornata!");
  }, [commentUpdate]);

  function handleUpdate() {
    setCommentUpdate((prev) => !prev);
  }

  return (
    <Row className=" justify-content-center min-vh-100">
      <Col xs={4}>
        <CardComp book={props.bookObj} />
      </Col>
      <Col xs={12}>
        <AddCommentComp bookObj={props.bookObj} callbackUpdate={handleUpdate} />
        <CommentAreaComp bookObj={props.bookObj} update={commentUpdate} />
      </Col>
    </Row>
  );
}
export default MyDetail;
