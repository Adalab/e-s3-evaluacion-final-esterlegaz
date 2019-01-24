import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardDetail extends Component {

    getLife() {
        const character = this.props.character;
        if (character.alive === true) {
            return 'Vivo';
        } else {
            return 'Muerto'
        }
    }

    render() {
        const CharacterId = this.props.match.params.id;
        if (this.props.character.length > 0 && CharacterId < this.props.character.length) {
            const character = this.props.character[CharacterId];
            return (
                <div className="card">
                    <h2 className="item__name">{character.name}</h2>
                    <img className="item__img" src={character.image} alt={character.name} />
                    <p>{character.house}</p>
                    <p>{character.yearOfBirth}</p>
                    <p>{character.patronus}</p>
                    <p>{this.getLife()}</p>
                    <Link to="/">Volver</Link>
                </div>
            );

        } else {
            return (
                <React.Fragment>
                    <p>No hay datos disponibles</p>
                    <Link to="/">Volver</Link>
                </React.Fragment>
            );
        }
    }
}

export default CardDetail;