import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '@components/hooks/HookApp.component';

describe('HookComponent', () => {
  const hookAppJSX = <HookApp />;
  let wrapper = shallow(hookAppJSX);

  beforeEach(() => {
    wrapper = shallow(hookAppJSX);
  });

  test('The component snapshot should match', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
