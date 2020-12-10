import React, { Validator } from 'react';
import PropTypes from 'prop-types';
import { connect, ConnectedProps } from 'react-redux';
import { AppSubmitEvent } from '@typings/htmlEvents';
import useForm from '../../hooks/useForm';
import { searchPokemons } from '../../store/actions/carouselActions';

const mapDispatch = {
  searchPokemons,
};

const connection = connect(null, mapDispatch);
export type OwnProps = {
  title: string;
};

type ReduxProps = ConnectedProps<typeof connection>;

type Props = OwnProps & ReduxProps;
const SearchBar = (props: Props): JSX.Element => {
  const { title } = props;
  const [formData, handleChange] = useForm({ searchValue: '' });
  const { searchValue } = formData;
  const handelSubmit = (event: AppSubmitEvent) => {
    event.preventDefault();
    props.searchPokemons(searchValue);
  };

  return (
    <div className="search-bar__container mb-5">
      <h2 className="search-bar__title">{title}</h2>
      <form className="search-bar__form" onSubmit={handelSubmit}>
        <input
          className="search-bar__input"
          type="text"
          name="searchValue"
          value={formData.searchValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default connection(SearchBar);
