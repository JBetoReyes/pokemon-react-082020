import React from 'react';
import { shallow } from 'enzyme';
import Card from '@components/common/Card.component';

describe('CardComponent', () => {
  let card = shallow(
    <Card
      detail="title"
      detailLabel="label"
      subDetail="subTitle"
      subDetailLabel="subLabel"
      url="url"
    />
  );
  beforeEach(() => {
    card = shallow(
      <Card
        detail="title"
        detailLabel="label"
        subDetail="subTitle"
        subDetailLabel="subLabel"
        url="url"
      />
    );
  });

  test('Should show the CardComponent', () => {
    expect(card).toMatchSnapshot();
  });
  test('Should show tile and sub title', () => {
    card = shallow(
      <Card
        detail="title"
        detailLabel="label"
        subDetail="subTitle"
        subDetailLabel="subLabel"
        url="url"
      />
    );
    expect(card.find('.card-item__details--title').text()).toBe('Label: Title');
    expect(card.find('.card-item__details--sub-title').text()).toBe(
      'SubLabel: SubTitle'
    );
  });
});
