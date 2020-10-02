import React, { Component } from "react";

export default class ClassProps extends Component {
    // constructor(props)
    // {
    //     super();
    // }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>class props</h3>
        <p>tên : {this.props.hoVaTen}</p>
        <p>lớp : {this.props.lop}</p>
      </div>
    );
  }
}
