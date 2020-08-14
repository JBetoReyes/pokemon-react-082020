import useFetchPokemons from '@app/home/Home.hooks';
import { renderHook } from '@testing-library/react-hooks';
import { IPokemonResponse } from '@services/pokemon.service';

describe('Home hooks', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    global.fetch = async (_input: RequestInfo) => {
      const mockResponse = {
        json: async (): Promise<IPokemonResponse> => {
          return {
            next: '',
            previous: '',
            results: [
              {
                name: 'pikachu',
                url: '/36/',
              },
            ],
          };
        },
      } as Response;
      return mockResponse;
    };
  });

  test('Should return the default state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPokemons());
    const { state, data } = result.current;
    await waitForNextUpdate();
    expect(state).toBe('loading');
    expect(data.length).toBe(0);
  });

  test('Should return the result state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchPokemons());
    await waitForNextUpdate();
    const { state, data } = result.current;
    expect(state).toBe('success');
    expect(data).toEqual([
      {
        name: 'pikachu',
        url: '/36/',
        number: 36,
      },
    ]);
  });
});
