import React, { Component } from 'react';
import CharacterList from './CharactersList';
import FilterCharacter from './FilterCharacter';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="main__title">Buscador de personajes</h1>
                <FilterCharacter includeNameFilter={this.props.includeNameFilter} />
                <CharacterList character={this.props.character} filterCharacter={this.props.filterCharacter} />
            </React.Fragment>
        );
    }
}

export default Home;
