import React, { Component } from "react";

import "./sets.css";

import Set from "../Set";

export default class Sets extends Component {
  constructor() {
    super();
    this.state = {
      pokemonSets: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://api.pokemontcg.io/v1/sets/")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.sets.reverse().map(set => ({
          code: `${set.code}`,
          name: `${set.name}`,
          data: `${set.releaseDate}`,
          standardLegal: `${set.standardLegal}`,
          expandedLegal: `${set.expandedLegal}`,
          symbol: `${set.symbolUrl}`,
          logo: `${set.logoUrl}`
        }))
      )
      .then(pokemonSets =>
        this.setState({
          pokemonSets
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  render() {
    const { pokemonSets } = this.state;

    return (
      <ul className="sets-list">
        {pokemonSets.map(pokemonSet => (
          <Set
            onClick={this.props.onSetClick}
            key={pokemonSet.code}
            {...pokemonSet}
          />
        ))}
      </ul>
    );
  }
}
