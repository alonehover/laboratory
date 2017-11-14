import React, { Component } from 'react'
import { Form, Icon, Input, Button, Table, message } from 'antd'
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
            },
            list: []
        }
    }

    componentDidMount() {
        API.BASE.linkList().then(res => {
            console.log(res);
            this.setState({
                list: res
            })
        })
    }

    handleChange = (e, type) => {
        let formdata = this.state.formdata
        formdata[type] = e.target.value
        this.setState(formdata)
    }

    handleAdd = () => {
        const param = this.state.formdata;
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                if(param[key] === "") {
                    message.error('数据不能为空！');
                    return false
                }                
            }
        }

        API.BASE.addLink(param).then(res => {
            message.success("添加成功！");
        })
    }

    render() {

        const columns = [{
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'url',
            dataIndex: 'url',
            key: 'url',
        }, {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
        }];

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
                <div style={{marginTop: 24, background: "#FFF", padding: 24}}>
                    <Table dataSource={this.state.list} columns={columns} rowKey="id"/>
                </div>
            </div>
        )
    }
}

export default Home
