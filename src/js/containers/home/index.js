import React, { Component } from 'react'

import API from '../../api'

import './home.scss'

class Home extends Component {
    constructor() {
        super()
    }

    state = {
        list: []
    }

    async componentDidMount() {
        const list = await API.tagList()
        this.setState({list})
    }

    render() {

        const {form_data} = this.state

        return (
            <div>
                <div className="container">
                    <ul className="tag-list">
                        {this.state.list.map(item => {
                            return (
                                <div key={item._id} className="row">
                                    <div className="tag-group-name">{item._id}</div>
                                    <ul className="tag-list" >
                                        {
                                            item.list.map((tag, index) => {
                                                return (
                                                    <li className="tag-item" key={index}>
                                                        <a href={tag.url}>
                                                            <div className="tag-name">{tag.name}</div>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
