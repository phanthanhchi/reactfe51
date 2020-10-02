import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    // isLogin là thuộc tính của class 
    // true : đã login => hiện tên người dùng
    // false: chưa login => hiện nút login

    state = {
        isLogin: false,
    }

    //isLogin = false;  cách này sai vì render không chạy lại
    // phương thức của class
    showTitle = () => {

        console.log("run")
        //this.isLogin = true;
        //this.state.isLogin = true;
        this.setState({
            isLogin:true,
        })

    }
    renderLogin = () => {
        if (this.state.isLogin) {
            // hiện tên người dùng
            return <p> phan thanh chi</p>
        } else {
            //hiện nút login
            return <button onClick={this.showTitle}>login</button>
        }
    }



    // render là phuowg thức cập nhập lại giao diện
    render() {
        return (
            <div>
                <h2>Conditional and state</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
