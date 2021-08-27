import { React, useState } from "react";
import "./style.css";


export default function CurrentDate() {
  const date = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  );
  return <div className="currentDate">{date}</div>
}
