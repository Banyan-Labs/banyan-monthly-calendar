import { React, useState } from "react";
import { Container, Day } from "./style";

const CurrentDate = () => {
  const date = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );
  return (
    <Container>
      <Day>{date}</Day>
    </Container>
  );
};

export default CurrentDate;

