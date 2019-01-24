import React, { Component } from 'react';
import { fetchCharacters } from './services/CharactersService';
import CharacterList from './components/CharactersList';
import FilterCharacter from './components/FilterCharacter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      nameFilter: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.filterCharacter = this.filterCharacter.bind(this);
    this.includeNameFilter = this.includeNameFilter.bind(this);
    this.fetchData();
  }

  fetchData() {
    fetchCharacters()
      .then(data => {
        const newCharacter = data.map((item, index) => {
          return { ...item, id: index }
        });
        this.setState({
          character: newCharacter
        })
      })
  }

  filterCharacter(){
    return this.state.character.filter(item => item.name.toUpperCase().includes(this.state.nameFilter.toUpperCase()));
  }

  includeNameFilter(e) {
    const guilty = e.currentTarget.value;
    this.setState({
      nameFilter: guilty
    })
  }

  render() {
    return (
      <React.Fragment>
      <FilterCharacter includeNameFilter={this.includeNameFilter}/>
      <CharacterList character={this.state.character} filterCharacter={this.filterCharacter}/>
      </React.Fragment>
    )
  }
}

export default App;
