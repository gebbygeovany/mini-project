import React, { useContext, useState } from "react";
import {
    Menu,
    Dropdown,
    Button,
    Segment,
    Image,
    Icon,
    Label,
} from "semantic-ui-react";



function NavBar(props) {

    const navBar = (
        <Segment inverted>
            <div
                className="ui huge top inverted fixed menu "
                style={{ height: 80, zIndex: 1100 }}
            >
                <Menu inverted secondary>
                    <Menu.Item />
                    <Menu.Item />
                    <Menu.Item>
                        <img src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                    <Menu.Item
                        name='home'
                    // active={activeItem === 'home'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                    // active={activeItem === 'messages'}
                    // onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                    // active={activeItem === 'friends'}
                    // onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        </Segment>
    )
    return navBar;
}

export default NavBar;
