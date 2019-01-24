import React, { Component } from 'react';

class CharactersList extends Component {
    render() {
        return (
            <ul className="list__container">
                {this.props.filterCharacter().map((person, index) => {
                    return (
                        <li className="list__item" key={index}>
                            <img className="item__img" src={person.image} alt={person.name} />
                            <h2>{person.name}</h2>
                            <p>{person.house}</p>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CharactersList;
