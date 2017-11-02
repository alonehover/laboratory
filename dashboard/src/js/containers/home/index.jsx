import React, { Component } from 'react'
import { Form, Icon, Input, Button, Table } from 'antd'
import API from '../../api'

import './home.less'

const FormItem = Form.Item;

class Home extends Component {
    constructor() {
        super()
    }

    state = {
        list: []
    }

    async componentDidMount() {
        // const list = await API.tagList()
        // this.setState({list})
    }

    render() {

        // const {form_data} = this.state

        return (
            <div className="container">
                <Form>
                    <FormItem>
                        <Input placeholder="name" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="url" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="category" />
                    </FormItem>
                    <Button>Add</Button>
                </Form>
                <div style={{marginTop: 24}}>
                    <Table />
                </div>
            </div>
        )
    }
}

export default Home
