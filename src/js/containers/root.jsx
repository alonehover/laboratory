import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default class Root extends Component {
    handleClick() {

    }

     render() {
         return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    className="menu"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1"><Icon type="link" />链接管理</Menu.Item>
                </Menu>
                <section className="main">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

