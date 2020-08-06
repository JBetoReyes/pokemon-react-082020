import React from 'react';
import { shallow } from 'enzyme';
import Card from '@components/common/Card.component';

describe('CardComponent', () => {
  let card = shallow(<Card title="title" subTitle="subTitle" />);
  beforeEach(() => {
    card = shallow(<Card title="title" subTitle="subTitle" />);
  });

  test('Should show the CardComponent', () => {
    expect(card).toMatchSnapshot();
  });
});
