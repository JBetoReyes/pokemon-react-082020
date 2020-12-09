import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import cardFactory from '@components/common/Card.component';
import { IPokemon } from '../../models/pokemonModel';

interface RouteParams {
  pokemonnumber: string;
}

const PokemonDetail = ({
  location,
}: RouteComponentProps<RouteParams, any, IPokemon>): JSX.Element => {
  const Card = cardFactory<IPokemon>();
  const pokemonsImageUrl = process.env.POKEMON_IMAGES_URL;
  const { number, name } = location.state;
  return (
    <div>
      <Card
        subDetail={number}
        detailLabel="Name"
        detail={name}
        subDetailLabel="Pokemon Number"
        url={`${pokemonsImageUrl}/${number}.png`}
        ref={null}
      />
    </div>
  );
};

export default PokemonDetail;
