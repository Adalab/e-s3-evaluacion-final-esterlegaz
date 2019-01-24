import React, { Component } from 'react';

class FilterCharacter extends Component {
    render() {
        return (
            <input type="text" onKeyUp={this.props.includeNameFilter}/>
        );
    }
}

export default FilterCharacter;
