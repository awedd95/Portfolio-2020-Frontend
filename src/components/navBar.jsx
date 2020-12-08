import React from 'react'
import {Menu, Layout} from 'antd'
import {Link, useLocation, withRouter} from 'react-router-dom'
const {Header} = Layout
const NavBar = () => {
    const current = useLocation()

    return(
      <Menu mode="horizontal" selectedKeys={[current.pathname]} theme="dark"  >
      <Menu.Item key="/">
      <Link to="/"> Home </Link>
      </Menu.Item>
      <Menu.Item key="/about-me">
      <Link to="/about-me"> About Me </Link>
      </Menu.Item>
      <Menu.Item key="/projects">
      <Link to="/projects"> Projects </Link>
      </Menu.Item>
      <Menu.Item key="/blog">
      <Link to="/blog"> Blog </Link>
      </Menu.Item>
      </Menu>
    )
}

export default withRouter(NavBar)
