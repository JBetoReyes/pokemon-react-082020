const PokemonService = async (): Promise<IPokemonApp[]> => {
  const apiUrl = process.env.POKEMON_API;
  const rawResponse = await fetch(apiUrl as string);
  const { results } = (await rawResponse.json()) as IPokemonResponse;
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

export default PokemonService;

export interface IPokemonResponse {
  results: IPokemonAM[];
}

export interface IPokemonAM {
  name: string;
  url: string;
}

export interface IPokemonApp extends IPokemonAM {
  number: number;
}
