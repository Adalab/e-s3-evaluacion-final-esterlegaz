import React, { Component } from 'react';

class CharacterCard extends Component {
    render() {
        return (
            <li className="list__item" key={this.props.index}>
                <img className="item__img" src={this.props.image} alt={this.props.name} />
                <h2>{this.props.name}</h2>
                <p>{this.props.house}</p>
            </li>
        );
    }
}

CharacterCard.defaultProps = {
    house: "Sin casa",
}

export default CharacterCard;
