import React, { Component } from 'react';
import PropTypes from "prop-types";

class FilterCharacter extends Component {
    render() {
        return (
            <div className="input__container">
                <input className="page__input" type="text" onKeyUp={this.props.includeNameFilter} />
            </div>
        );
    }
}

FilterCharacter.propTypes = {
    includeNameFilter: PropTypes.func.isRequired,
};

export default FilterCharacter;
