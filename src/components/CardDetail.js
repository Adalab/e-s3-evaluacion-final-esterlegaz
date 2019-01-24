import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardDetail extends Component {
    render() {
        const CharacterId = this.props.match.params.id;
        if (this.props.character.length > 0 && CharacterId < this.props.character.length) {
            const character = this.props.character[CharacterId];
            return (
                <div className="card">
                    <img className="item__img" src={this.props.image} alt={this.props.name} />
                    <h2>{this.props.name}</h2>
                    <p>{this.props.house}</p>
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