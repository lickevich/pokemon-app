import React, { Component } from 'react';

import './card.css';

export default class Card extends Component {

    render() {
        return (
        <li className="card">
            <figure className="card__pic">
                <img
                    className="card__pic-img"
                    alt="Placeholder"
                    src={this.props.image}
                />
            </figure>
        </li>
        );
    }
}