import React, { Component } from 'react';

class FilterCharacter extends Component {
    render() {
        return (
            <div className="input__container">
                <input className="page__input" type="text" onKeyUp={this.props.includeNameFilter} />
            </div>
        );
    }
}

export default FilterCharacter;
