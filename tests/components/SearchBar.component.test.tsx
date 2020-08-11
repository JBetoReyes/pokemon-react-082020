import React from 'react';
import SearchBar from '@components/common/SearchBar.component';
import { shallow } from 'enzyme';

describe('SearchBarComponent', () => {
  let searchBar = shallow(<SearchBar title="title" />);

  beforeEach(() => {
    searchBar = shallow(<SearchBar title="title" />);
  });

  test('Should show the SearchBarComponent', () => {
    expect(searchBar).toMatchSnapshot();
  });
});
