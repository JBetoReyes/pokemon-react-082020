import { fetchPokemons, IPokemonApp } from '@services/pokemon.service';
import { useState, useEffect } from 'react';
import { IFetchState, fetchStateDefault } from '@services/fetch.service';

const useFetchPokemons = (): IFetchState<IPokemonApp[]> => {
  const [state, setPokemons] = useState<IFetchState<IPokemonApp[]>>(
    fetchStateDefault([])
  );
  useEffect(() => {
    fetchPokemons()
      .then((pokemonsRes: IPokemonApp[]) => {
        setPokemons((pokemonsState) => ({
          data: [...pokemonsState.data, ...pokemonsRes],
          state: 'success',
        }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        setPokemons((pokemonsState) => ({
          data: pokemonsState.data,
          state: 'error',
        }));
      });
  }, []);
  return state;
};

export default useFetchPokemons;
