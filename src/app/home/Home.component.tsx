import React, { useState, useEffect } from 'react';
import SearchBar from '@components/common/SearchBar.component';
import Carousel from '@components/common/Carousel.component';
import Card from '@components/common/Card.component';

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
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const pokemonImagesUrl = process.env.POKEMON_IMAGES_URL;
  const getPokemons = async () => {
    const api = process.env.POKEMON_API;
    const resp = await fetch(api as string);
    const { results } = (await resp.json()) as IPokemonAPI;
    const pokemonsMap = results.map<IPokemon>((pokemon: IPokemonAM) => {
      const numberRegex = /^.*\/(\d\d?\d?\d?)\/?$/;
      let number: number | string = 36;
      if (numberRegex.test(pokemon.url)) {
        [, number] = pokemon.url.match(numberRegex) as RegExpMatchArray;
      }
      return {
        ...pokemon,
        number: +number,
      };
    });
    setPokemons(pokemonsMap);
  };
  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <section>
      <SearchBar title="Which is your favorite pokemon?" />
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
    </section>
  );
};
