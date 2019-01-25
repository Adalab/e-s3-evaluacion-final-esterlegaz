import React, { Component } from 'react';
import PropTypes from "prop-types";
import CharacterCard from './CharacterCard';

class CharactersList extends Component {
    render() {
        if (this.props.filterCharacter().length === 0) {
            return <p className="list__error">No hay resultados</p>
        }
        else {
            return (
                <ul className="list__container">
                    {this.props.filterCharacter().map((person) => {
                        return (
                            <li className="list__item" key={person.id} id={person.id}>
                                <CharacterCard id={person.id} name={person.name} house={person.house} image={person.image} index={person.id} />
                            </li>
                        );
                    }
                    )}
                </ul>
            );
        }
    }
}

CharactersList.propTypes = {
    filterCharacter: PropTypes.func.isRequired,
};

export default CharactersList;
