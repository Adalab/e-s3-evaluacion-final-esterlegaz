import React, { Component } from 'react';

class CharacterCard extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="item__img" src={this.props.image} alt={this.props.name} />
                <h2>{this.props.name}</h2>
                <p>{this.props.house}</p>
            </React.Fragment>
        );
    }
}

export default CharacterCard;
