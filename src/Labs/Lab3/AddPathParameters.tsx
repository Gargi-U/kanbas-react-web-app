import React from "react";
import { useParams } from "react-router-dom";

export default function AddPathParameters() {
  const { a, b } = useParams<{ a?: string; b?: string }>();

  const numA = a ? parseInt(a, 10) : 0;
  const numB = b ? parseInt(b, 10) : 0;

  return (
    <div id="wd-add"> 
      <h4>Add Path Parameters</h4>
      {a} + {b} = {numA + numB}
    </div>
  );
}
