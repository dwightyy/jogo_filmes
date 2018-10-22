import React, { Component } from "react";

class Header extends Component {
    state = {};
    render() {
        return <h1 className={this.props.alignment}>{this.props.header}</h1>;
    }
}

export default Header;
