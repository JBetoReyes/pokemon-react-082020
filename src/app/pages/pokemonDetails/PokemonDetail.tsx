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
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="mr-5">
        <Card
          subDetail={number}
          detailLabel="Name"
          detail={name}
          subDetailLabel="Pokemon Number"
          url={`${pokemonsImageUrl}/${number}.png`}
          ref={null}
        />
      </div>

      <div className="data-container">
        <div className="pokemon-info">
          <span>Name: {name}</span>
          <span>Number: {number}</span>
          <span>Type: </span>
          {
            details?.types.map((type) => {
              return (<span key={`type-${type}`} >{type.name}</span>)
            })
          }
          <span>Weak: </span>
          {
            details?.weaknesses.map((weakness) => {
              return (<span key={`weaknesses-${weakness}`} >{weakness}</span>)
            })
          }
        </div>
        <div className="stats-container">
          <h3 className="text-center mt-2">Base Stats</h3>
          <div className="stats-table">
            {
              details?.stats.map((stat) => {
                return ([
                  <span key={`${name}-${stat.name}-${stat.baseStat}-label`} className="stats-table--label">{stat.name}:</span>,
                  <span key={`${name}-${stat.name}-${stat.baseStat}-value`} className="stats-table--data">{stat.baseStat}</span>
                ]);
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
