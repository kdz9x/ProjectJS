import React, { Component } from 'react';

class Option extends Component {
    render() {
        return (
                <option>{this.props.option}</option>    
        );
    }
}

export default Option;