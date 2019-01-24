import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class CharacterCard extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="item__img" src={this.props.image} alt={this.props.name} />
                <Link to= {`/card/${this.props.id}`}><h2>{this.props.name}</h2></Link>
                <p>{this.props.house}</p>
            </React.Fragment>
        );
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
  };

export default CharacterCard;
