import React from "react";
import { Button, ListGroupItem } from "react-bootstrap";

function CommentComp(props) {
  console.log(props.comment.comment);

  // const handleDelete = () => {
  //   props.handleDeleteComment(props.comment._id);
  // };

  return (
    <ListGroupItem>
      <div className=" d-flex ">
        <div className=" me-3">
          <Button variant="danger" onClick={() => props.handleDeleteComment(props.comment._id)}>
            Delete
          </Button>
        </div>
        <div>{props.comment.comment}</div>
      </div>
    </ListGroupItem>
  );
}
export default CommentComp;
