import React, { Component } from 'react'

import API from '../../api'

import './home.scss'

class Home extends Component {

    constructor() {
        super()
    }

    state = {
        list: [],
        show_form: false,
        form_data: {
            name: "",
            url: "",
            desc: "",
            type: ""
        }
    }

    handleShowForm = () => {
        this.setState({
            show_form: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            show_form: false,
            form_data: {
                name: "",
                url: "",
                desc: "",
                type: ""
            }
        })
    }

    hanleTextChange = (name, e) => {
        console.log(name, e.target.value);
        let form_data = this.state.form_data
        form_data[name] = e.target.value
        this.setState({form_data})
    }

    handleSubmit = () => {
        let {form_data} = this.state

        for (var variable in form_data) {
            if (form_data.hasOwnProperty(variable)) {
                if(form_data[variable] === "" || form_data[variable] === undefined ) {
                    console.error(variable + "請填寫完整");
                    return ;
                }
            }
        }

        API.addTag(form_data).then(rs => {
            if(rs) {
                this.setState({
                    show_form: false,
                    list: rs,
                    form_data: {
                        name: "",
                        url: "",
                        desc: "",
                        type: ""
                    }
                })
            }
        })
    }

    async componentDidMount() {
        const list = await API.tagList()
        this.setState({list})
    }

    render() {

        const {form_data} = this.state

        return (
            <div>
                <div className={`tag-form ${this.state.show_form ? 'active' : ''}`} >
                    <div className="form-item">
                        <input type="text" placeholder="name" value={form_data.name} onChange={this.hanleTextChange.bind(this, 'name')}/>
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="desc" value={form_data.desc} onChange={this.hanleTextChange.bind(this, 'desc')}/>
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="url" value={form_data.url} onChange={this.hanleTextChange.bind(this, 'url')}/>
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="type" value={form_data.type} onChange={this.hanleTextChange.bind(this, 'type')}/>
                    </div>
                    <div className="form-item">
                        <button className="button" type="button" onClick ={this.handleSubmit}>添加</button>
                    </div>

                    <div className="btn-close" onClick={this.handleCloseForm}>
                        X
                    </div>
                </div>

                <div className="container">
                    <ul className="tag-list">
                        {this.state.list.map(item => {
                            return (
                                <div key={item._id}>
                                    <div>{item._id}</div>
                                    <ul className="tag-list" >
                                        {
                                            item.list.map((tag, index) => {
                                                return (
                                                    <li className="tag-item" key={index}>
                                                        <a href={tag.url}>
                                                            <div className="tag-name">{tag.name}</div>
                                                            <div className="txt-help">{tag.desc}</div>
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

                 <button className="btn-add" type="button" onClick={this.handleShowForm}> 添加 </button>
            </div>
        )
    }
}

export default Home
