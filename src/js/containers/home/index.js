import React, { Component } from 'react'

import './home.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="tag-form active">
                    <div className="form-item">
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="desc" />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="url" />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="type" />
                    </div>
                    <div className="form-item">
                        <button className="button" type="button" name="button">添加</button>
                    </div>

                    <div className="close">
                        X
                    </div>
                </div>

                <div className="tag-list">
                    <ul>
                        <li>qwe</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
