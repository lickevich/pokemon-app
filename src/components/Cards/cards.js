import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./cards.css";

import Card from "../Card";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      pokemonCards: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.pokemontcg.io/v1/cards?setCode=${
        this.props.match.params.setId
      }`
    )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.cards.map(card => ({
          id: `${card.id}`,
          name: `${card.name}`,
          image: `${card.imageUrl}`
        }))
      )
      .then(pokemonCards =>
        this.setState({
          pokemonCards
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    const { pokemonCards } = this.state;

    return (
      <div className="cards">
        <Link to={"/"} className="cards-home">Вернуться на главную</Link>
        <ul className="cards-list">
          {pokemonCards.map(pokemonCard => (
            <Card key={pokemonCard.id} {...pokemonCard} />
          ))}
        </ul>
      </div>
    );
  }
}


