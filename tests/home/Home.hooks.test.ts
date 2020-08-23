import useFetchPokemons from '@app/home/Home.hooks';
import { renderHook } from '@testing-library/react-hooks';

describe('Home hooks', () => {
  beforeEach(() => {
    const mockFetch = fetch as typeof fetchMock;
    mockFetch.resetMocks();
    mockFetch.mockResponse(
      JSON.stringify({
        next: '',
        previous: '',
        results: [
          {
            name: 'pikachu',
            url: '/36/',
          },
        ],
      })
    );
  });

  afterAll(() => {
    const mockFetch = fetch as typeof fetchMock;
    mockFetch.resetMocks();
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
