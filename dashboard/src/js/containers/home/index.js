import React, { Component } from 'react'

import API from '../../api'

import './home.less'

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

        // const {form_data} = this.state

        return (
            <div className="container">
                <ul className="tag-list">
                    list
                </ul>
                <div className="empty animation"></div>
            </div>
        )
    }
}

export default Home
