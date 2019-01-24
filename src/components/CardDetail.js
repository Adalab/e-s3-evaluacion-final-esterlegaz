import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class CardDetail extends Component {

    getLife() {
        const character = this.props.character;
        if (character.alive === false) {
            return 'Muerto';
        } else {
            return 'Vivo'
        }
    }

    render() {
        const CharacterId = this.props.match.params.id;
        if (this.props.character.length > 0 && CharacterId < this.props.character.length) {
            const character = this.props.character[CharacterId];
            return (
                <div className="card__detail">
                    <h2 className="detail__name">{character.name}</h2>
                    <img className="detail__img" src={character.image} alt={character.name} />
                    <p className="detail__house">{character.house}</p>
                    <p className="detail__year">{character.yearOfBirth}</p>
                    <p className="detail__patronus">{character.patronus}</p>
                    <p className="detail__alive">{this.getLife()}</p>
                    <Link to="/" className="detail__return">Volver</Link>
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

CardDetail.propTypes = {
    character: PropTypes.array.isRequired,
  };

export default CardDetail;