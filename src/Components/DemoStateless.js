//state less component là component function(react function component)
//cú pháp tạo : rfc=> enter
import React from 'react'

export default function DemoStateless() {
    return (
            <div className="card text-white bg-primary">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
    )
}
