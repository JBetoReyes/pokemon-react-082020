import React from 'react';
import Home from '@app/home/Home.component';
import { IFetchState } from '@services/fetch.service';
import { IPokemonApp } from '@services/pokemon.service';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import useFetchPokemons from '@app/home/Home.hooks';

jest.mock('@app/home/Home.hooks');
const useFetchPokemonsMocked = useFetchPokemons as jest.MockedFunction<
  typeof useFetchPokemons
>;

describe('Home Component', () => {
  const mockState: IFetchState<IPokemonApp[]> = {
    state: 'loading',
    data: [],
  };
  useFetchPokemonsMocked.mockReturnValue(mockState);
  const homeJsx = <Home />;
  let home = shallow(homeJsx);
  beforeEach(() => {
    home = shallow(homeJsx);
    useFetchPokemonsMocked.mockClear();
  });
  test.skip('Should render the home component', () => {
    expect(home).toMatchSnapshot();
  });
  test.skip('Should render the home component with cards', () => {
    const mockStateWithPokemons: IFetchState<IPokemonApp[]> = {
      state: 'success',
      data: [
        {
          name: 'pikachu',
          number: 36,
          url: 'url',
        },
        {
          name: 'charmander',
          number: 37,
          url: 'url',
        },
      ],
    };
    useFetchPokemonsMocked.mockReturnValue(mockStateWithPokemons);
    home = shallow(homeJsx);
    expect(home.find('Card').length).toBe(2);
    expect(home).toMatchSnapshot();
  });
});
