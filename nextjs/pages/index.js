import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import DataStore from '../stores/dataStore'
import Link from '../components/Link'

export default class Counter extends Component {
    constructor (props) {
        super(props)
        this.store = DataStore
    }

    render() {
        return (
            <Provider store={this.store}>
                <Link title='My Link' />
            </Provider>
        )
    }
}
