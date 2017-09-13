import React from 'react'
import { Provider } from 'mobx-react'
import { DataStore } from '../stores/dataStore'
import Page from '../components/Page'

export default class Counter extends React.Component {
    static getInitialProps({ req }) {
        const isServer = !!req
        const store = DataStore(isServer)
        return { lastUpdate: store.lastUpdate, isServer }
    }

    constructor(props) {
        super(props)
        this.store = DataStore(props.isServer, props.lastUpdate)
    }

    render() {
        return (
            <Provider store={this.store}>
                <Page title='Other Page' linkTo='/' />
            </Provider>
        )
    }
}