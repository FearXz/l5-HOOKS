import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function CategoryComp({ callbackCategory }) {
  return (
    <ButtonGroup>
      <Button key={"btn1"} variant={"primary"} onClick={() => callbackCategory("fantasy")}>
        Fantasy
      </Button>
      <Button key={"btn2"} variant={"primary"} onClick={() => callbackCategory("history")}>
        History
      </Button>
      <Button key={"btn3"} variant={"primary"} onClick={() => callbackCategory("horror")}>
        Horror
      </Button>
      <Button key={"btn4"} variant={"primary"} onClick={() => callbackCategory("romance")}>
        Romance
      </Button>
      <Button key={"btn5"} variant={"primary"} onClick={() => callbackCategory("scifi")}>
        Sci-Fi
      </Button>
    </ButtonGroup>
  );
}

export default CategoryComp;
