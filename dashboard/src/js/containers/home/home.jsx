import React, { Component } from 'react'
import { Form, Icon, Input, Button, Table } from 'antd'
import API from '../../api'

import './home.less'

const FormItem = Form.Item;

class Home extends Component {
    constructor() {
        super()

        this.state = {
            formdata: {
                name: "",
                url: "",
                category: ""
            }
        }
    }

    state = {
        list: []
    }

    componentDidMount() {
        // const list = await API.tagList()
        // this.setState({list})
    }

    handleChange = (e, type) => {
        let formdata = this.state.formdata
        formdata[type] = e.target.value
        console.log(formdata)
        this.setState(formdata)
    }

    handleAdd = () => {
        console.log(this.state.formdata);
    }

    render() {

        return (
            <div className="container">
                <Form>
                    <FormItem>
                        <Input placeholder="name" value={this.state.formdata.name} onChange={e => this.handleChange(e, "name")}/>
                    </FormItem>
                    <FormItem>
                        <Input placeholder="url" value={this.state.formdata.url} onChange={e => this.handleChange(e, "url")}/>
                    </FormItem>
                    <FormItem>
                        <Input placeholder="category" value={this.state.formdata.category} onChange={e => this.handleChange(e, "category")}/>
                    </FormItem>
                    <Button onClick={this.handleAdd}>Add</Button>
                </Form>
                <div style={{marginTop: 24}}>
                    <Table />
                </div>
            </div>
        )
    }
}

export default Home
