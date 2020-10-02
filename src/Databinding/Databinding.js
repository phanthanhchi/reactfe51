import React, { Component } from 'react'

export default class Databinding extends Component {
    //thuộc tính của lớp đối tượng => sử dụng dược ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        hinhAnh: 'https://picsum.photos/200/200',
        tenHocVien: 'nguyen van teo'
    }

       //----------------------phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
        renderHocVien = () => {
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={this.hocVien.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                    <p className="card-text">Mã số: {this.hocVien.ma}</p>
                </div>
            </div>

        }    
    render() {
        //----------------binding data là biến
        let title = 'CYBERSOFT';
        let imgSrc = "https://picsum.photos/200/200";
        //----------------binding data là hàm
        const renderImg = () => {
            //giá trị hàm muốn render ra giao dien phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>

        }
 


        return (

            <div className="container">
                <div id="title">{title}</div>
                <div className="w-25">
                    <img src={imgSrc} />

                </div>
                <input className="w-50 form-control" value={title} />

                <div>
                    {renderImg()};
                </div>
                <ul>
                    <li> mã học viên : {this.hocVien.ma}</li>
                    <li> tên học viên : {this.hocVien.tenHocVien}</li>
                    <li> hình ảnh : <img src={this.hocVien.hinhAnh} width="200" /></li>
                </ul>

                {this.renderHocVien()}
            </div>
        )
    }
}
