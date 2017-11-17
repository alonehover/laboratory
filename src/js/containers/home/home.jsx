import React, { Component } from 'react'
import { Form, Input, Button, Table, message } from 'antd'
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
        this.getList()
    }

    getList() {
        API.BASE.linkList().then(res => {
            this.setState({
                list: res,
                formdata: {
                    name: "",
                    url: "",
                    category: ""
                },
                editId: ""
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
            if(res !== undefined) {
                message.success("添加成功！");
                this.getList()
            }
        })
    }

    handleDel = id => {
        API.BASE.removeLink(id).then(res => {
            if(res !== undefined) {
                message.success("刪除成功！")
                this.getList()
            }
        })
    }

    handleEdit = data => {
        const formdata = {
            name: data.name,
            url: data.url,
            category: data.category
        }

        this.setState({
            formdata,
            editId: data.id
        })
    }

    handleEditSubmit = () => {
        const param = this.state.formdata;
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                if(param[key] === "") {
                    message.error('数据不能为空！');
                    return false
                }                
            }
        }

        param.id = this.state.editId

        if(!param.id) {
            message.error("沒有id!")
            return false;
        }

        API.BASE.updateLink(param).then(res => {
            if(res !== undefined) {
                message.success("修改成功！")
                this.getList()
            }
        })
    }

    handleEditCancel = () => {
        this.setState({
            formdata: {
                name: "",
                url: "",
                category: ""
            },
            editId: ""
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
        }, {
            title: 'option',
            render: (text, data) => (
                <span>
                    <a className="mr-s" onClick={() => this.handleEdit(data)}>编辑</a> 
                    <a onClick={() => this.handleDel(data.id)}>删除</a>
                </span>
            )
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
                    {this.state.editId === "" ? (
                        <Button type="primary" onClick={this.handleAdd}>Add</Button>
                    ) : (
                        <div>
                            <Button type="primary" className="mr-s" onClick={this.handleEditSubmit}>Edit</Button>
                            <Button onClick={this.handleEditCancel}>Cancel</Button>
                        </div>
                    )}
                </Form>
                <div style={{marginTop: 24, background: "#FFF"}}>
                    <Table dataSource={this.state.list} columns={columns} rowKey="id"/>
                </div>
            </div>
        )
    }
}

export default Home
