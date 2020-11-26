import { IAppFetchResponse } from '@typings/util/fetchWrapper';

export interface IPokemonNM {
  name: string;
  url: string;
}

export interface IPokemon extends IPokemonNM {
  number: string;
}

export interface IPokemonResponse extends IAppFetchResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonNM[];
}
