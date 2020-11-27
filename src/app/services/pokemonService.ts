import { IPokemon, IPokemonNM, IPokemonResponse } from '../models/pokemonModel';
import { get } from '../util/fetchWrapper';

const numberRegex = /^.*\/(\d{1,4})\/?$/;

export const fetchPokemons = async (page: number) => {
  const apiUrl = process.env.POKEMON_API as string;
  const storePage = localStorage.getItem('page');
  if (storePage && +storePage >= page) {
    return;
  }
  const offset = page === 1 ? 0 : (page - 1) * 20;
  const response = await get<IPokemonResponse>(
    `${apiUrl}?offset=${offset}&limit=20`
  );

  const pokemons = response.results.filter(filterResponse).map(processResponse);
  updateStorage(pokemons, page);
  return pokemons;
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

const updateStorage = (pokemons: IPokemon[], page: number) => {
  let storedPokemons: IPokemon[] | string | null = localStorage.getItem(
    'pokemons'
  );
  if (storedPokemons) {
    storedPokemons = JSON.parse(storedPokemons) as IPokemon[];
  } else {
    storedPokemons = [];
  }
  localStorage.setItem(
    'pokemons',
    JSON.stringify([...storedPokemons, ...pokemons])
  );
  const storePage = localStorage.getItem('page');
  if (!storePage || +storePage < page) {
    localStorage.setItem('page', `${page}`);
  }
};
