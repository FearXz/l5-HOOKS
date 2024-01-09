import React, { useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";

function AddCommentComp(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState({
    comment: "",
    rate: "",
    elementId: props.bookObj.asin,
  });

  function handleInput(event) {
    const nameValue = event.target.name;
    const value = event.target.value;
    console.log(nameValue);
    console.log(value);
    setComment((prevState) => ({
      ...prevState,
      [nameValue]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTMwZWI1MjViYjAwMThlZDA4NWQiLCJpYXQiOjE3MDQ3MjM0MjUsImV4cCI6MTcwNTkzMzAyNX0.Hu_OirLz5GCraWSzSmR2dYEgx8UHmfuHMTX3YwMgjlQ",
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        const deletedObj = await response.json();
        props.callbackUpdate();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Row className=" justify-content-center">
      <Col xs={6}>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 justify-content-center">
            <Col className=" mb-3" xs={12}>
              <Form.Group controlId="validationCustom01">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  type="text"
                  placeholder="Comment"
                  name="comment"
                  value={comment.comment}
                  onChange={handleInput}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className=" mb-3" xs={12}>
              <Form.Select
                aria-label="Default select example"
                name="rate"
                value={comment.rate}
                onChange={handleInput}
                required
              >
                <option value="">Rate</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Col>
            <Col xs={12}>
              <Button className="mb-3" type="submit">
                Submit form
              </Button>
              {isLoading && <Spinner />}
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default AddCommentComp;
