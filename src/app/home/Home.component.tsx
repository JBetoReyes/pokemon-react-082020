import React from 'react';
import SearchBar from '@components/common/SearchBar.component';
import Carousel from '@components/common/Carousel.component';
import Card from '@components/common/Card.component';
import useFetchPokemons from './Home.hooks';

export interface IPokemonAPI {
  results: IPokemonAM[];
}

export interface IPokemonAM {
  name: string;
  url: string;
}

export interface IPokemon extends IPokemonAM {
  number: number;
}

export default (): JSX.Element => {
  const pokemonImagesUrl = process.env.POKEMON_IMAGES_URL;
  const { state, data: pokemons } = useFetchPokemons();
  const carousel = (
    <Carousel>
      {pokemons.map(({ name, number }) => (
        <Card
          key={`${number}-${name}`}
          title={name}
          subTitle={`${number}`}
          url={`${pokemonImagesUrl}/${number}.png`}
        />
      ))}
    </Carousel>
  );
  return (
    <section>
      <SearchBar title="Which is your favorite pokemon?" />
      {state === 'loading' ? 'loading' : carousel}
    </section>
  );
};
