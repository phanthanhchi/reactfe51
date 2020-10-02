import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  danhSachKhoaHoc = ["nodejs", "reackjs", "vuejs","fgfg"];
  renderDanhSachKhoaHoc = () => {
   return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li>{khoaHoc}</li>;
    });
  };

//  renderDanhSachKhoaHoc = ()  this.danhSachKhoaHoc.map((khoaHoc, index) =>  <li>{khoaHoc}</li>;

  render() {
    return (
      <div>
        <h2> demo list and keys</h2>
        <h3>danh sách khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
