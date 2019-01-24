import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharactersList extends Component {
    render() {
        return (
            <ul className="list__container">
                {this.props.filterCharacter().map((person, index) => {
                    return (
                        <CharacterCard name={person.name} house={person.house} image={person.image} index={index}/>
                    );
                })}
            </ul>
        );
    }
}



export default CharactersList;
