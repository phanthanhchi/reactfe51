import React, { Component } from 'react'

export default class extends Component {
    showTitle = ()=>{
        alert('hello')
    }
    showMess = ()=>{
        alert('hello')
    }

    render() {
        return (
            <div>
                {/* xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>

                {/* xử lý sự kiện sử dụng hàm trung gian */}
                <button onClick={()=>{
                 this.showTitle();
                }}>show title</button>   
                <br/><br/>


                {/* <button onClick={()=>{
                    this.sh
                }}></button> */}
            </div>
        )
    }
}
