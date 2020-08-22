import useCounter from '@app/hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useCounter', () => {
  test('Should test the default return valye of use counter', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(0);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('Should test initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter } = result.current;
    expect(counter).toBe(10);
  });
  test('Should increment the counter', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(1);
  });
  test('Should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(9);
  });
  test('Should test min value', () => {
    const { result } = renderHook(() => useCounter(10, 10));
    const { decrement } = result.current;
    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(10);
  });
  test('Should reset the value', () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(0);
  });
});
