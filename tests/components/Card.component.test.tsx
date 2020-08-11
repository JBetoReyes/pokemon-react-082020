import React from 'react';
import { shallow } from 'enzyme';
import Card from '@components/common/Card.component';

describe('CardComponent', () => {
  const cardJSX = (
    <Card
      detail="title"
      detailLabel="label"
      subDetail="subTitle"
      subDetailLabel="subLabel"
      url="url"
    />
  );
  let card = shallow(cardJSX);
  beforeEach(() => {
    card = shallow(cardJSX);
  });

  test('Should show the CardComponent', () => {
    card = shallow(cardJSX);
    expect(card).toMatchSnapshot();
  });
  test('Should show tile and sub title', () => {
    card = shallow(cardJSX);
    expect(card.find('.card-item__details--title').text()).toBe('Label: Title');
    expect(card.find('.card-item__details--sub-title').text()).toBe(
      'SubLabel: SubTitle'
    );
    expect(card.find('img').prop('src')).toBe('url');
  });
});
