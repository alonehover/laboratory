import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import axios from 'axios'

@inject('store') @observer
class Page extends React.Component {
    componentDidMount() {
        axios.get("http://localhost:8080/api/link/group").then(res => res.data).then(res => {
            if(res.code === 1) {
                this.props.store.setList(res.data)
            }
        })
    }

    render() {
        const group = this.props.store.list
        return (
            <div>
                <style jsx global>{`
                    body, html {
                        // margin: 0;
                        // padding: 0;
                        font-family: Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
                    }
                `}</style>
                <style jsx>{`
                    ul, li {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    ul {
                      overflow: hidden;
                    }

                    li {
                      line-height: 24px;
                      margin-right: 12px;
                      float: left;
                    }

                    a {
                        color: #108ee9;

                    }
                `}</style>
                <h1>{this.props.title}</h1>
                {group.map(item => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <ul>
                                {item.val.map(val => (
                                    <li key={val.name}><a href={val.url}>{val.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default Page
