const charactersApi = 'http://hp-api.herokuapp.com/api/characters';
const fetchCharacters = () => fetch(charactersApi).then(response => response.json());

export {fetchCharacters};