import { IPokemon, IPokemonNM, IPokemonResponse } from '../models/pokemonModel';
import { get } from '../util/fetchWrapper';

const numberRegex = /^.*\/(\d{1,4})\/?$/;

export const fetchPokemons = async () => {
  const apiUrl = process.env.POKEMON_API as string;
  const response = await get<IPokemonResponse>(apiUrl);

  return response.results.filter(filterResponse).map(processResponse);
};

export const filterResponse = (pokemon: IPokemonNM) => {
  return numberRegex.test(pokemon.url);
};

export const processResponse = (pokemon: IPokemonNM): IPokemon => {
  const [, number] = pokemon.url.match(numberRegex) as RegExpMatchArray;
  return {
    ...pokemon,
    number,
  };
};
