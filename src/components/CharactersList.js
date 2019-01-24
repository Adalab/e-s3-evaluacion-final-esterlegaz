import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharactersList extends Component {
    render() {
        return (
            <ul className="list__container">
                {this.props.filterCharacter().map((person) => {
                    return (
                        <li className="list__item" key={person.id} id={person.id}>
                            <CharacterCard id={person.id} name={person.name} house={person.house} image={person.image} index={person.id} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}



export default CharactersList;
