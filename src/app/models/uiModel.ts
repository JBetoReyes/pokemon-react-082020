import { IPokemon } from './pokemonModel';

export interface ICarousel {
  isloading?: boolean;
  pokemons: IPokemon[];
}
