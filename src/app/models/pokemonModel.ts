import { IAppFetchResponse } from '@typings/util/fetchWrapper';

export interface ILinkRecord {
  name: string;
  url: string;
}

export interface IStatsNM {
  base_stat: number;
  effort: number;
  stat: ILinkRecord;
}

export interface IPokemonTypeNM {
  slot: number;
  type: ILinkRecord;
}

export interface IPokemonTypeRelationsResponse extends IAppFetchResponse {
  damage_relations: {
    double_damage_from: ILinkRecord[];
    double_damage_to: ILinkRecord[];
    half_damage_from: ILinkRecord[];
    half_damage_to: ILinkRecord[];
    no_damage_from: ILinkRecord[];
    no_damage_to: ILinkRecord[];
  };
  pokemon: {
    pokemon: ILinkRecord;
  }[];
}

export interface IStats {
  name: string;
  baseStat: number;
}

export interface IPokemonType {
  name: string;
  url: string;
}

export interface IPokemonDetailsResponse extends IAppFetchResponse {
  stats: IStatsNM[];
  types: IPokemonTypeNM[];
}

export interface IPokemon extends ILinkRecord {
  number: string;
}

export interface IPokemonDetails {
  stats: IStats[];
  types: IPokemonType[];
  weaknesses: string[];
}

export interface IPokemonResponse extends IAppFetchResponse {
  count: number;
  next: string;
  previous: string;
  results: ILinkRecord[];
}
