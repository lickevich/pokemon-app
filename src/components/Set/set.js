import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./set.css";

export default class Set extends Component {
  clickHandler = e => {
    this.props.onClick(this.props.code);
  };

  render() {
    console.log(this.props);

    return (
      <li className="set">
        <Link to={`/cards/${this.props.code}`}>
          <div className="set__logo">
            <img
              className="set__logo-img"
              src={this.props.logo}
              alt="Placeholder"
            />
          </div>
          <div className="set__content">
            <div className="set__media">
              <div className="set__media-left">
                <figure className="set__media-logo">
                  <img
                    className="set__media-logo-img"
                    src={this.props.symbol}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="set__media-right">
                <p className="set__media-title">{this.props.name}</p>
                <p className="set__media-subtitle">
                  Released {this.props.data}
                </p>
              </div>
            </div>
            <div className="set__container">
              <ul className="set__list">
                <li className="set__item">Standard Legal</li>
                <li className="set__item">Expanded Legal</li>
              </ul>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}


