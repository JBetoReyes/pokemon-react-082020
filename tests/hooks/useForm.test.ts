import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '@app/hooks/useForm';
import { AppChangeEvent } from '@typings/htmlEvents';

describe('useForm', () => {
  const data = {
    name: 'Jose Alberto Reyes Quevdo',
    email: 'myemail@gmail.com',
  };
  const changeEvent = {
    target: {
      value: 'test name',
      name: 'name',
    },
  };
  test('Should return the default values', () => {
    const { result } = renderHook(() => useForm(data));
    const { formData, handleChange, reset } = result.current;
    expect(formData).toEqual(data);
    expect(typeof handleChange).toBe('function');
    expect(typeof reset).toBe('function');
  });
  test('Should change the form name value', () => {
    const { result } = renderHook(() => useForm(data));
    const { handleChange } = result.current;
    act(() => handleChange(changeEvent as AppChangeEvent));
    const { formData } = result.current;
    expect(formData.name).toBe('test name');
  });
  test('Should reset the form value', () => {
    const { result } = renderHook(() => useForm(data));
    const { reset, handleChange } = result.current;
    expect(() => {
      handleChange(changeEvent as AppChangeEvent);
      reset();
    });
    const { formData } = result.current;
    expect(formData).toEqual(data);
  });
});
