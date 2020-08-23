import useFetch from '@app/hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'jest-fetch-mock';

describe('useFetch', () => {
  const mockFetch = fetch as typeof fetchMock;
  beforeEach(() => {
    mockFetch.resetMocks();
  });
  test('Should received the default state', async () => {
    mockFetch.mockResponse(JSON.stringify({ data: 'test' }));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('randomurl')
    );
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(undefined);
    await waitForNextUpdate();
  });
  test('Should received the default state', async () => {
    mockFetch.mockResponse(JSON.stringify({ data: 'test' }));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('randomurl')
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data).toEqual({ data: 'test' });
    expect(loading).toBe(false);
    expect(error).toBe(undefined);
  });
  test('Should handle a faile scenario', async () => {
    mockFetch.mockReject(() => Promise.reject(new Error('random error')));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('randomurl')
    );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect((error as Error).message).toEqual('random error');
  });
});
