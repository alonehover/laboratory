 import React, { Component } from 'react'
 import { Layout, Icon } from 'antd'

 export default class Root extends Component {
     render() {
         return (
            <div>
                 <div>roots</div>
                 {this.props.children}
            </div>
         )
     }
 }