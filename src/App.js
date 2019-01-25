import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchCharacters } from './services/CharactersService';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import './App.scss';

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
  }

  componentDidMount() {
    this.getSavedCharacter();
  }

  fetchData() {
    fetchCharacters()
      .then(data => {
        const newCharacter = data.map((item, index) => {
          return { ...item, id: index }
        });
        this.saveCharacter(newCharacter, 'savedCharacter');
        this.setState({
          character: newCharacter
        })
      })
  }

  saveCharacter(characters, characterName) {
    localStorage.setItem(characterName, JSON.stringify(characters));
  }

  getSavedCharacter(){
    if (localStorage.getItem('savedCharacter') !== null){
      const mySavedCharacter = JSON.parse(localStorage.getItem('savedCharacter'));
      this.setState({
        character: mySavedCharacter
      })
    } else {
      this.fetchData()
    }
  }

  filterCharacter() {
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
        <Switch>
          <Route exact path='/' render={() => <Home includeNameFilter={this.includeNameFilter} character={this.state.character} filterCharacter={this.filterCharacter} />} />
          <Route path='/card/:id' render={props => <CardDetail match={props.match} character={this.state.character} name={this.state.character.name}/>} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
