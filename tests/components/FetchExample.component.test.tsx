import React from 'react';
import FetchExample from '@components/hooks/FetchExample.component';
import { shallow } from 'enzyme';
import useFetch from '@app/hooks/useFetch';

jest.mock('@app/hooks/useFetch');
describe('FetchExample', () => {
  (useFetch as jest.Mock).mockReturnValue({
    data: [],
    loading: true,
  });
  let wrapper = shallow(<FetchExample />);
  beforeAll(() => {
    const mockFetch = fetch as typeof fetchMock;
    mockFetch.resetMocks();
  });
  beforeEach(() => {
    wrapper = shallow(<FetchExample />);
  });
  test('Should match with the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should test that the received quote is rendered', () => {
    (useFetch as jest.Mock).mockReturnValue({
      data: [
        {
          quote_id: 1,
          quote: 'test quote',
          author: 'test author',
        },
      ],
      loading: false,
    });
    wrapper = shallow(<FetchExample />);
    expect(wrapper.find('h2').text().trim()).toBe('test quote');
    expect(wrapper.find('h3').text().trim()).toBe('test author');
  });
});
