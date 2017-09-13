import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { DataStore } from '../stores/dataStore'
import Page from '../components/Page'

export default class Counter extends Component {
    static getInitialProps({ req }) {
        const isServer = !!req
        const store = DataStore(isServer)
        return { lastUpdate: store.lastUpdate, isServer }
    }

    constructor (props) {
        super(props)
        this.store = DataStore(props.isServer, props.lastUpdate)
    }

    render() {
        return (
            <Provider store={this.store}>
                <Page title='Index Page' linkTo='/other' />
            </Provider>
        )
    }
}
