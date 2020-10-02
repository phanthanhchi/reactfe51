import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "phan thanh chi",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Demo props</h2>
        <FunctionProps
          //cách truyền prop trong reactjs
          hoVaTen={this.state.ten}
          lop={this.state.lop}
        />
        <ClassProps
          //cách truyền prop trong reactjs
          hoVaTen={this.state.ten}
          lop={this.state.lop}
        />
      </div>
    );
  }
}
