import { IPokemon, IPokemonNM, IPokemonResponse } from '../models/pokemonModel';
import { get } from '../util/fetchWrapper';

const numberRegex = /^.*\/(\d{1,4})\/?$/;

export const fetchPokemons = async (page: number) => {
  const apiUrl = process.env.POKEMON_API as string;
  const offset = page === 1 ? 0 : (page - 1) * 20;
  const response = await get<IPokemonResponse>(
    `${apiUrl}?offset=${offset}&limit=20`
  );

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
