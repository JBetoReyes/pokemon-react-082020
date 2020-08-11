export const fetchPokemons = async (page = 1): Promise<IPokemonApp[]> => {
  const pokemonResponse = localStorage.getItem('pokemonResponse');
  let results: IPokemonAM[] = [];
  let next = '';
  if (pokemonResponse) {
    const storedResponse = JSON.parse(pokemonResponse) as IPokemonResponse;
    results = [...results, ...storedResponse.results];
    next = storedResponse.next as string;
  }
  if (page * 20 > results.length) {
    const apiUrl = next || process.env.POKEMON_API;
    const rawResponse = await fetch(apiUrl as string);
    const newResponse = (await rawResponse.json()) as IPokemonResponse;
    results = [...results, ...newResponse.results];
    next = newResponse.next as string;
  }
  localStorage.setItem(
    'pokemonResponse',
    JSON.stringify({
      results,
      next,
      loaded: results.length,
    })
  );
  const pokemons = results.map<IPokemonApp>(
    (pokemon: IPokemonAM): IPokemonApp => {
      const numberRegex = /^.*\/(\d{1,4})\/?$/;
      let number: number | string = 36;
      if (numberRegex.test(pokemon.url)) {
        [, number] = pokemon.url.match(numberRegex) as RegExpMatchArray;
      }
      return {
        ...pokemon,
        number: +number,
      };
    }
  );
  return pokemons;
};

export interface IPokemonResponse {
  next: string;
  previous: string;
  results: IPokemonAM[];
}

export interface IPokemonAM {
  name: string;
  url: string;
}

export interface IPokemonApp extends IPokemonAM {
  number: number;
}
