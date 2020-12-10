import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import cardFactory from '@components/common/Card';
import { IPokemon } from '../../models/pokemonModel';
import usePokemonDetails from '@hooks/usePokemonDetails';

interface RouteParams {
  pokemonnumber: string;
}

const PokemonDetail = ({
  location,
}: RouteComponentProps<RouteParams, any, IPokemon>): JSX.Element => {
  const Card = cardFactory<IPokemon>();
  const pokemonsImageUrl = process.env.POKEMON_IMAGES_URL;
  const { number, name } = location.state;
  const [details] = usePokemonDetails(number);
  const toTitleCase = (name: string) => {
    return name.charAt(0).toUpperCase() + name.substr(1);
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="data-container d-flex">
        <div className="mr-5">
          <img
            src={`${pokemonsImageUrl}/${number}.png`}
            alt="pokemonimage"
            className="data-container--img"
          />
          <div className="pokemon-info--details">
            <div className="pokemon-info--name"> {toTitleCase(name)}</div>
          </div>
        </div>
        <div className="pokemon-info my-auto">
          <div className="stats-container my-auto">
            <h3 className="stats-title text-center mt-2">Base Stats</h3>
            <div className="stats-table data-table">
              {details?.stats.map((stat) => {
                return [
                  <span
                    key={`${name}-${stat.name}-${stat.baseStat}-label`}
                    className="table-label"
                  >
                    {stat.name}:
                  </span>,
                  <span
                    key={`${name}-${stat.name}-${stat.baseStat}-value`}
                    className="table-data"
                  >
                    {stat.baseStat}
                  </span>,
                ];
              })}
            </div>
          </div>
          <div className="badge-container">
            <span className="badge-type--label badge-title">Type: </span>
            {details?.types.map(({ name }) => {
              return (
                <span
                  key={`type-${name}`}
                  className={`type-badge border-${name}`}
                >
                  {name}
                </span>
              );
            })}
          </div>
          <div className="badge-container">
            <span className="badge-type--label badge-title">Weak: </span>
            {details?.weaknesses.map((weakness) => {
              return (
                <span
                  key={`weaknesses-${weakness}`}
                  className={`type-badge border-${weakness}`}
                >
                  {weakness}
                </span>
              );
            })}
          </div>
          <div className="badge-container">
            <span className="badge-type--label badge-title">Strong: </span>
            {details?.strong.map((strong) => {
              return (
                <span
                  key={`stong-${strong}`}
                  className={`type-badge border-${strong}`}
                >
                  {strong}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
