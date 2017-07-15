import React, {Component} from "react"

import API from '../../api'

import "./create.scss"

class Create extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        form_data: {
            name: "",
            desc: "",
            url: "",
            type: ""
        }
    }

    hanleTextChange = (e, name) => {
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
                this.props.history.replace("/")
            }
        })
    }

    render() {
        const {form_data} = this.state

        return (
            <div className="tag-form container">
                <div className="form-item">
                    <input type="text" placeholder="name" value={form_data.name} onChange={(e) => this.hanleTextChange(e, "name")}/>
                </div>
                <div className="form-item">
                    <input type="text" placeholder="desc" value={form_data.desc} onChange={(e) => this.hanleTextChange(e, "desc")}/>
                </div>
                <div className="form-item">
                    <input type="text" placeholder="url" value={form_data.url} onChange={(e) => this.hanleTextChange(e, "url")}/>
                </div>
                <div className="form-item">
                    <input type="text" placeholder="type" value={form_data.type} onChange={(e) => this.hanleTextChange(e, "type")}/>
                </div>
                <div className="form-item">
                    <button className="button" type="button" onClick ={this.handleSubmit}>添加</button>
                </div>
            </div>
        )
    }
}

export default Create
