import { fetchPokemon } from '@services/pokemonService';
import { useState, useEffect } from 'react';
import { IPokemonDetails } from '../models/pokemonModel';

const usePokemonDetails = (number: string) => {
  const [details, setDetails] = useState<IPokemonDetails | undefined>();
  useEffect(() => {
    fetchPokemon(number).then((detailsResponse) => {
      setDetails(detailsResponse);
    });
  }, []);
  return [details];
};

export default usePokemonDetails;
