import React, { Component } from 'react'

import './home.scss'

class Home extends Component {

    constructor() {
        super()
    }

    state = {
        show_form: false
    }

    handleShowForm = () => {
        this.setState({
            show_form: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            show_form: false
        })
    }

    render() {
        return (
            <div>
                <div className={`tag-form ${this.state.show_form ? 'active' : ''}`}>
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

                    <div className="btn-close" onClick={this.handleCloseForm}>
                        X
                    </div>
                </div>

                <div className="container">
                    <ul className="tag-list">
                        <li className="tag-item">
                            <a href="">
                                <div className="tag-name">name</div>
                                <div className="txt-help">desc</div>
                            </a>
                        </li>
                    </ul>
                </div>

                 <button className="btn-add" type="button" onClick={this.handleShowForm}> 添加 </button>
            </div>
        )
    }
}

export default Home
