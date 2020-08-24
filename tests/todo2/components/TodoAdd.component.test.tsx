import TodoAdd from '@components/hooks/Todo2/TodoAdd.component';
import React from 'react';
import { shallow } from 'enzyme';
import { AppSubmitEvent } from '@typings/htmlEvents';

describe('TodoAdd', () => {
  const handleAdd = jest.fn();
  const todoAddJsx = <TodoAdd handleAdd={handleAdd} />;
  let wrapper = shallow(todoAddJsx);
  beforeEach(() => {
    wrapper = shallow(todoAddJsx);
  });
  test('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should call the handle add', () => {
    wrapper.find('input').simulate('change', {
      target: { value: 'test todo1', name: 'description' },
    });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} } as AppSubmitEvent);
    expect(handleAdd).toHaveBeenCalled();
    expect(handleAdd).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: 'Test todo1',
      done: false,
    });
    const value = wrapper.find('input').prop('value');
    expect(value).toBe('');
  });
});
