import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component{
  render(){
    const itemStyle ={ fontFamily: "monospace", fontSize: "20px", color: "white" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src="http://luckybelly.com/img/lucky-logo-light.png"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">Menus</Menu.Item>
            <Menu.Item style={itemStyle}>Info</Menu.Item>
            <Menu.Item style={itemStyle}>Contact</Menu.Item>
            <Menu.Item style={itemStyle}>Breaking Bread Hospitality</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
