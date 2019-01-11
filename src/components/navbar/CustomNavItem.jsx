import React, { Component } from 'react';
import {
    NavItem,
    NavLink,
} from 'reactstrap';

import { navbarLinkStyle } from '../../styling/styles';

export default class CustomNavItem extends Component {
    constructor(props) {
        super(props);

        this.onHoverEvent = this.onHoverEvent.bind(this);

        this.state = {
            color: navbarLinkStyle.color,
        };
    }

    onHoverEvent(event) {
        if(event.onmouseover) {
            this.setState( 
                {
                    color: 'white',
                }
                );
            } else {
                this.setState(
                    {
                        color: 'black',
                    }
                )
            }
    }

    render() {
        return (
            <NavItem>
                <NavLink 
                    href={this.props.href}
                    style={{color: this.state.color}}
                    onMouseOver={this.onHoverEvent}
                    onMouseOut={this.onHoverEvent}
                    >
                    {this.props.children}
                </NavLink>
            </NavItem>
        )
    }
}