import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
                    {/* <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu> */}
                </Menu>
                <section className="main">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

