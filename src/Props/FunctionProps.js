import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>Funtion Props</h3>
      <p>tên : {props.hoVaTen}</p>
      <p>lớp : {props.lop}</p>
    </div>
  );
}
