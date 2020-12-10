import {
  IPokemon,
  IPokemonDetails,
  IPokemonDetailsResponse,
  ILinkRecord,
  IPokemonResponse,
  IPokemonType,
  IStats,
  IPokemonTypeRelationsResponse,
} from '../models/pokemonModel';
import { get } from '../util/fetchWrapper';
import * as mockResponse from '../store/mockResponse.json';

const numberRegex = /^.*\/(\d{1,4})\/?$/;
const apiUrl = process.env.POKEMON_API as string;

export const fetchPokemons = async (page: number) => {
  const storePage = localStorage.getItem('page');
  if (storePage && +storePage >= page) {
    return;
  }
  const offset = page === 1 ? 0 : (page - 1) * 20;
  const response = await get<IPokemonResponse>(
    `${apiUrl}/pokemon?offset=${offset}&limit=20`
  );

  const pokemons = response.results.filter(filterResponse).map(processResponse);
  updateStorage(pokemons, page);
  return pokemons;
};

export const fetchPokemon = async (
  pokemonNumber: string
): Promise<IPokemonDetails> => {
  const response = await get<IPokemonDetailsResponse>(
    `${apiUrl}/pokemon/${pokemonNumber}`
  );
  const typesRelations = await Promise.all(
    response.types.map((type) => fetchPokemonTypeRelations(type.type.name))
  );
  return {
    types: response.types.map<IPokemonType>((type) => type.type),
    stats: response.stats.map<IStats>((stat) => {
      const { name } = stat.stat;
      return {
        name: `${name.charAt(0).toUpperCase()}${name
          .substr(1)
          .replace('-', ' ')}`,
        baseStat: stat.base_stat,
      };
    }),
    weaknesses: typesRelations.reduce<string[]>(
      (acc, curr) => [...acc, ...curr.weak],
      []
    ),
  };
};

export const fetchPokemonTypeRelations = async (type: string) => {
  const response = await get<IPokemonTypeRelationsResponse>(
    `${apiUrl}/type/${type}`
  );
  return {
    type,
    weak: response.damage_relations.double_damage_from.map(
      (relation) => relation.name
    ),
    strong: response.damage_relations.double_damage_to.map(
      (relation) => relation.name
    ),
  };
};

export const fetchAllPokemons = () => {
  return mockResponse.results.filter(filterResponse).map(processResponse);
};

export const filterResponse = (pokemon: ILinkRecord) => {
  return numberRegex.test(pokemon.url);
};

export const processResponse = (pokemon: ILinkRecord): IPokemon => {
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
